import { IonIcon } from "@ionic/react"
import inbox from '../media/inbox.svg';
import starred from '../media/starred.svg';
import sent from '../media/sent.svg';
import trash from '../media/trash.svg';
import extra from '../media/extra.svg';
import './MailRowButtons.css';

interface props {
  category: string;
  isCategoryActive: boolean;
}

export const MailCategoryIcon: React.FC<props> = ({ category, isCategoryActive }) => {
  const color = isCategoryActive ? 'rgb(215, 50, 45)' : '#757575';
  const style: React.CSSProperties = {
    color,
  };
  switch (category.toUpperCase()) {
    case 'INBOX':
      return (
        <IonIcon icon={inbox} className="MailRowButton" style={style} />
      );
    case 'STARRED':
      return(
        <IonIcon icon={starred} className="MailRowButton" style={style} />
      );
    case 'SENT':
      return(
        <IonIcon icon={sent} className="MailRowButton" style={style} />
      );
    case 'TRASH':
      return(
        <IonIcon icon={trash} className="MailRowButton" style={style} />
      );
    default:
      return (
        <IonIcon icon={extra} className="MailRowButton" style={style} />
      );
  }
};