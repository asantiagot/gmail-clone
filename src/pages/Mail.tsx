import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { HomeLogo, HomeLogoProps } from '../components/HomeLogo';
import { SearchBar, SearchBarProps } from '../components/SearchBar';
import { Sidebar, SidebarProps } from '../components/Sidebar';
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
