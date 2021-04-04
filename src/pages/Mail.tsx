import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { HomeLogo, HomeLogoProps } from '../components/HomeLogo';
import { MailList } from '../components/MailList';
import { SearchBar, SearchBarProps } from '../components/SearchBar';
import { Sidebar, SidebarProps } from '../components/Sidebar';
import { Toolbar } from '../components/Toolbar';
import { Messages } from '../models/Messages';
import './Mail.css';

const GMAIL_LOGO = 'gmail-logo.png';

const homeLogoProps: HomeLogoProps = {
  src: `${process.env.PUBLIC_URL}${GMAIL_LOGO}`,
  title: 'Gmail',
  href: 'mail',
};

const searchBarProps: SearchBarProps = {
  placeholder: 'Search mail',
};

const sidebarProps: SidebarProps = {
  main: ['Inbox', 'Starred', 'Sent', 'Trash'],
  extra: ['Work', 'Travel'],
}

const mailList: Messages = {
  mailList: [{id: '1', body: '<p>Lorem ipsum</p>', date: '20/12/21', sender: 'Joao Lopez', subject: 'Your suscription confirmation', tags: []}, {id: '2', body: '<p>Lo de marcos ipsum</p>', date: '20/12/21', sender: 'Juan Reynoso', subject: 'Your shipment', tags: []}],
};

export const Mail: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow data-testid="firstRow">
            <IonCol size="4">
              <HomeLogo {...homeLogoProps} />
            </IonCol>
            <IonCol>
              <SearchBar {...searchBarProps} />
            </IonCol>
          </IonRow>
          <IonRow data-testid="secondRow">
            <IonCol size="4">
              <Sidebar {...sidebarProps} />
            </IonCol>
            <IonCol>
              <Toolbar />
              <MailList {...mailList} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
