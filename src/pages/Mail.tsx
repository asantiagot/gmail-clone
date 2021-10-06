import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { useEffect, useReducer } from 'react';
import { HomeLogo, HomeLogoProps } from '../components/HomeLogo/HomeLogo';
import { MailList } from '../components/MailList/MailList';
import { SearchBar, SearchBarProps } from '../components/SearchBar/SearchBar';
import { Sidebar, SidebarProps } from '../components/Sidebar/Sidebar';
import { MailPageActionTypes } from '../models/actions/MailPage.actions';
import { searchInbox, setActiveInbox, setInboxData, setSearchBarText, tagEmail } from '../models/actions/MailPageActionCreators';
import { MAIL_PAGE_DEFAULT_STATE, SEARCHBAR_DEFAULT_STATE } from '../models/Constants';
import { MailPageState } from '../models/MailPageState';
import { Messages } from '../models/Messages';
import './Mail.css';
import { reducer } from './MailReducer';
import { messages } from '../data/emails.json';

const GMAIL_LOGO = 'gmail-logo.png';

const homeLogoProps: HomeLogoProps = {
  src: `${process.env.PUBLIC_URL}${GMAIL_LOGO}`,
  title: 'Gmail',
  href: 'mail',
};

export const Mail: React.FC = ({ children} ) => {
  const [state, dispatch] = useReducer<(state: MailPageState, action: MailPageActionTypes) => MailPageState>(reducer, MAIL_PAGE_DEFAULT_STATE);
  const { inbox, searchBar, tags, activeInbox } = state;

  const handleSetInboxData = (messages: Messages) => {
    dispatch(setInboxData(messages));
  };

  const handleSearchbarChange = (value: string) => {
    dispatch(setSearchBarText(value));
    dispatch(searchInbox(value));
  };

  const handleSetActiveInbox = (inbox: string) => {
    dispatch(setActiveInbox(inbox));
  };

  const handleTagEmail = (tag: string, id: string) => {
    dispatch(tagEmail(tag, id));
  };

  const searchbarProps: SearchBarProps = {
    ...SEARCHBAR_DEFAULT_STATE,
    value: searchBar,
    handleSearchbarChange,
  };

  const sidebarProps: SidebarProps = {
    ...tags,
    onClick: handleSetActiveInbox,
  }

  const mailListProps: Messages = {
    ...inbox,
    onClick: handleTagEmail,
  }

  useEffect(() => {
    handleSetInboxData({ mailList: messages  });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow data-testid="firstRow">
            <IonCol size="2" className="HomeLogo">
              <HomeLogo {...homeLogoProps} />
            </IonCol>
            <IonCol className="SearchBar">
              <SearchBar {...searchbarProps} />
            </IonCol>
          </IonRow>
          <IonRow data-testid="secondRow">
            <IonCol size="2" className="Sidebar">
              <Sidebar {...sidebarProps} />
            </IonCol>
            <IonCol className="MailList">
              {children || ( 
                <MailList messages={mailListProps} activeInbox={activeInbox} /> 
               )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
