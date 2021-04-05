import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { useEffect, useReducer } from 'react';
import { HomeLogo, HomeLogoProps } from '../components/HomeLogo';
import { MailList } from '../components/MailList';
import { SearchBar, SearchBarProps } from '../components/SearchBar';
import { Sidebar } from '../components/Sidebar';
import { Toolbar } from '../components/Toolbar';
import { MailPageActionTypes } from '../models/actions/MailPage.actions';
import { setInboxData, setSearchBarText } from '../models/actions/MailPageActionCreators';
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

export const Mail: React.FC = () => {
  const [state, dispatch] = useReducer<(state: MailPageState, action: MailPageActionTypes) => MailPageState>(reducer, MAIL_PAGE_DEFAULT_STATE);
  const { inbox, searchBar, trash, tags } = state;

  const handleSetInboxData = (messages: Messages) => {
    dispatch(setInboxData(messages));
  };

  const handleSearchbarChange = (value: string) => {
    dispatch(setSearchBarText(value));
  };

  const searchbarProps: SearchBarProps = {
    ...SEARCHBAR_DEFAULT_STATE,
    value: searchBar,
    handleSearchbarChange,
  };

  useEffect(() => {
    handleSetInboxData({ mailList: messages });
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
              <Sidebar {...tags} />
            </IonCol>
            <IonCol>
              <Toolbar />
              <MailList {...inbox} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
