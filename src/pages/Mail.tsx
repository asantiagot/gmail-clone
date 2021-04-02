import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import './Mail.css';

const GMAIL_LOGO = 'gmail-logo.png';

export const Mail: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow data-testid="firstRow">
            <IonCol size="4">
              <IonImg src={`${process.env.PUBLIC_URL}${GMAIL_LOGO}`} />
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
