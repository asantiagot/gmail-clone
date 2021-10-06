import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useHistory } from "react-router";
import { Mail } from "../../models/Mail";
import { getFormattedDate } from "../../utils/getFormattedDate";
import './Message.css';

export const Message: React.FC<Mail> = ({ subject, body, sender, date }) => {
  const history = useHistory();
  const [month, day, time, year] = getFormattedDate(date);
  const DEFAULT_RECIPIENT = 'SalesLoft';

  return (
    <div>
      <nav>
        <button className="MailRowButton" onClick={() => history.push('/mail')}>
          <IonIcon icon={arrowBack} />
        </button>
      </nav>
      <header>
        <p className="MessageSubject">{subject}</p>
      </header>
      <section>
        <span><b>{sender}</b></span>
        <span className="MessageInfo" id="receivedDate">{`${month} ${day}, ${year}, ${time} `}</span>
        <span id="recipient" className="MessageInfo">{`to ${DEFAULT_RECIPIENT}`}</span>
      </section>
      <section dangerouslySetInnerHTML={{ __html: body}} /> {/** TODO: ADD PURIFY TO BODY TO PREVENT XSS */} 
    </div>
  );
};
