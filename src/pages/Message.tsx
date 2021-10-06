import { useHistory, useLocation } from "react-router";
import { Mail } from "./Mail";
import { Message as MessageComponent } from '../components/Message/Message';
import { messages } from '../data/emails.json';
import { useEffect, useState } from "react";
import { Mail as MailType } from '../models/Mail';

export const Message = () => {
  const history = useHistory();
  const location = useLocation();
  const [id, setId] = useState(history.location.pathname.split('/mail/message/')[1]);
  const message = messages.filter((message: MailType) => message.id === id)[0];

  useEffect(() => {
    const splitted = (location.pathname.split('/mail/message/')[1]);
    setId(splitted);
  }, [location.pathname]);

  return <Mail>
      <MessageComponent {...message} />
    </Mail>;
};
