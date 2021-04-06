import { Messages } from "../models/Messages";
import { MailRow } from "./MailRow";
import './MailList.css';
import { mail } from "ionicons/icons";

interface MailListProps {
  messages: Messages;
  activeInbox: string;
}

export const MailList: React.FC<MailListProps> = ({ messages, activeInbox }) => {
  const filterTrash = 'trash';
  return (
    <table className="MailTable" data-testid="mail-table">
      <tbody className="MailTableBody" data-testid="mail-tbody">
        {activeInbox === 'TRASH' ? (messages.mailList && messages.mailList.filter((mail) => (
          mail.tags.includes(filterTrash)
        )).map((mail, i) => (
          <MailRow mail={mail} id={mail.id} key={i} onClick={messages.onClick!} activeInbox={activeInbox} />
        ))) : (messages.mailList && messages.mailList.filter((mail) => (
          !mail.tags.includes(filterTrash))).map((mail, i) => (
          <MailRow mail={mail} id={mail.id} key={i} onClick={messages.onClick!} activeInbox={activeInbox} />
        )))}
      </tbody>
    </table>
  );
};
