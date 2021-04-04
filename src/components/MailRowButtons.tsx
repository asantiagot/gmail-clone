import { IonIcon } from "@ionic/react"
import { flagOutline, squareOutline, starOutline } from 'ionicons/icons';
import './MailRowButtons.css';

export const MailRowButtons: React.FC = () => {
  return (
    <>
      <button className="MailRowButton">
        <IonIcon icon={squareOutline} />
      </button>
      <button className="MailRowButton">
        <IonIcon icon={starOutline} />
      </button>
      <button className="MailRowButton">
        <IonIcon icon={flagOutline} />
      </button>
    </>
  )
}