import { useHistory } from "react-router";
import { Mail } from "../models/Mail";
import { getFormattedDate } from "../utils/getFormattedDate";
import './MailRow.css';
import { MailRowButtons } from "./MailRowButtons";

interface MailRowProps {
  mail: Mail; 
  id: string;
};

export const MailRow: React.FC<MailRowProps> = ({ mail, id }) => {
  const history = useHistory();
  const [month, day, time] = getFormattedDate(mail.date);
  return (
    <tr className="MailRow" data-testid={`mail-list-${id}`} onClick={() => history.push(`/mail/message/${id}`)}>
      <td className="MailInfo">
        <MailRowButtons />
        <span aria-label={`Mail Sender is ${mail.sender}`} id="mailSender">{mail.sender}</span>
        <span aria-label={`Mail Subject is ${mail.subject}`} id="mailSubject">{mail.subject}</span>
        <span aria-label={`Mail Date is ${month} ${day} at ${time}`}>{`${month} ${day} ${time}`}</span>
      </td>
    </tr>
  );
};
