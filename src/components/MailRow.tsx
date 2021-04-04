import { Mail } from "../models/Mail";
import './MailRow.css';
import { MailRowButtons } from "./MailRowButtons";

interface MailRowProps {
  mail: Mail; 
  id: number;
};

export const MailRow: React.FC<MailRowProps> = ({ mail, id }) => {
  return (
    <tr className="MailRow" data-testid={`mail-list-${id}`}>
      <td className="MailInfo">
        <MailRowButtons />
        <span aria-label={`Mail Sender is ${mail.sender}`} id="mailSender">{mail.sender}</span>
        <span aria-label={`Mail Subject is ${mail.subject}`} id="mailSubject">{mail.subject}</span>
        <span aria-label={`Mail Date is ${mail.date}`}>{mail.date}</span>
      </td>
    </tr>
  );
};
