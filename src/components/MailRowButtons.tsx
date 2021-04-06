import { IonIcon } from "@ionic/react"
import { flagOutline, squareOutline, starOutline } from 'ionicons/icons';
import './MailRowButtons.css';

export const MailRowButtons: React.FC<{ id: string; onClick: (tag: string, id: string) => void }> = ({ onClick, id }) => {
  return (
    <>
      <button className="MailRowButton">
        <IonIcon icon={squareOutline} />
      </button>
      <button className="MailRowButton" onClick={(e) => { e.stopPropagation(); onClick('STARRED', id) }}>
        <IonIcon icon={starOutline} />
      </button>
      <button className="MailRowButton" onClick={(e) => { e.stopPropagation(); onClick('FLAGGED', id) }}>
        <IonIcon icon={flagOutline} />
      </button>
    </>
  )
}