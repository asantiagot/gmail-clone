import { IonIcon } from "@ionic/react"
import { flagOutline, starOutline, trashBin, star, flag } from 'ionicons/icons';
import { Mail } from "../models/Mail";
import './MailRowButtons.css';

export const MailRowButtons: React.FC<{ id: string; onClick: (tag: string, id: string) => void; mail: Mail }> = ({ onClick, id, mail }) => {
  const isStarred = mail.tags.includes('starred');
  const isFlagged = mail.tags.includes('flagged');
  return (
    <>
      <button className="MailRowButton" onClick={(e) => { e.stopPropagation(); onClick('TRASH', id)}}>
        <IonIcon icon={trashBin} />
      </button>
      <button className="MailRowButton" onClick={(e) => { e.stopPropagation(); onClick('STARRED', id) }}>
        <IonIcon icon={isStarred ? star : starOutline} color={isStarred ? 'warning' : ''} />
      </button>
      <button className="MailRowButton" onClick={(e) => { e.stopPropagation(); onClick('FLAGGED', id) }}>
        <IonIcon icon={isFlagged ? flag : flagOutline} color={isFlagged ? 'danger' : ''} />
      </button>
    </>
  )
}