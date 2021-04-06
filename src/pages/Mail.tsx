import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { useEffect, useReducer } from 'react';
import { HomeLogo, HomeLogoProps } from '../components/HomeLogo';
import { MailList } from '../components/MailList';
import { SearchBar, SearchBarProps } from '../components/SearchBar';
import { Sidebar, SidebarProps } from '../components/Sidebar';
import { Toolbar } from '../components/Toolbar';
import { MailPageActionTypes } from '../models/actions/MailPage.actions';
import { setActiveInbox, setInboxData, setSearchBarText, tagEmail } from '../models/actions/MailPageActionCreators';
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
            <IonCol size="2">
              <HomeLogo {...homeLogoProps} />
            </IonCol>
            <IonCol>
              <SearchBar {...searchbarProps} />
            </IonCol>
          </IonRow>
          <IonRow data-testid="secondRow">
            <IonCol size="2">
              <Sidebar {...sidebarProps} />
            </IonCol>
            <IonCol>
              {children || ( 
                <>
                  <Toolbar />
                  <MailList messages={mailListProps} activeInbox={activeInbox} /> 
                </>
               )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
