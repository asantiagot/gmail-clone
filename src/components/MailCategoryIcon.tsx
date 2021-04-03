import { IonIcon } from "@ionic/react"
import inbox from '../media/inbox.svg';
import starred from '../media/starred.svg';
import sent from '../media/sent.svg';
import trash from '../media/trash.svg';
import extra from '../media/extra.svg';

interface props {
  category: string;
}
export const MailCategoryIcon: React.FC<props> = ({category}) => {
  switch (category.toUpperCase()) {
    case 'INBOX':
      return (
        <IonIcon icon={inbox} />
      );
    case 'STARRED':
      return(
        <IonIcon icon={starred} />
      );
    case 'SENT':
      return(
        <IonIcon icon={sent} />
      );
    case 'TRASH':
      return(
        <IonIcon icon={trash} />
      );
    default:
      return (
        <IonIcon icon={extra} />
      );
  }
};