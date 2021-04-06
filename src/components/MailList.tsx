import { Messages } from "../models/Messages";
import { MailRow } from "./MailRow";
import './MailList.css';

export const MailList: React.FC<Messages> = ({ mailList, onClick }) => {
  return (
    <table className="MailTable" data-testid="mail-table">
      <tbody className="MailTableBody" data-testid="mail-tbody">
        {mailList && mailList.map((mail, i) => (
          <MailRow mail={mail} id={mail.id} key={i} onClick={onClick!} />
        ))}
      </tbody>
    </table>
  );
};
