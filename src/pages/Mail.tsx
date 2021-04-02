import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import { HomeLogo, HomeLogoProps } from '../components/HomeLogo';
import './Mail.css';

const GMAIL_LOGO = 'gmail-logo.png';

const homeLogoProps: HomeLogoProps = {
  src: `${process.env.PUBLIC_URL}${GMAIL_LOGO}`,
  title: 'Gmail',
  href: 'mail',
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
            </IonCol>
          </IonRow>
          <IonRow data-testid="secondRow">
            <IonCol size="4">
            </IonCol>
            <IonCol>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
