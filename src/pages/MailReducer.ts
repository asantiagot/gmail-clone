import { MailPageState } from '../models/MailPageState';
import { MailPageActionTypes, SET_INBOX_DATA, SET_SEARCHBAR_TEXT } from '../models/actions/MailPage.actions';
import { Messages } from '../models/Messages';
import { Mail } from '../models/Mail';

const containsSpam = (mailExtract: string) => {
  const SPAM = 'SPAM';
  if (mailExtract.toUpperCase().includes(SPAM)) {
    return true;
  }
  return false;
};

const removeMail = (mailList: Mail[], mailNumber: Mail): Mail[] => {
  const index = mailList.indexOf(mailNumber);
  if (index > -1) {
    mailList.splice(index, 1);
  }
  return mailList;
}

const processMessages = (messages: Messages): Messages => {
  for (let i = 0; i < messages.mailList.length; i++) {
    const body = messages.mailList[i].body;
    const subject = messages.mailList[i].subject;
    if (containsSpam(body) || containsSpam (subject)) {
      removeMail(messages.mailList, messages.mailList[i]);
    }
  }
  return messages;
};

export const reducer = (
  state: MailPageState,
  action: MailPageActionTypes,
): MailPageState => {
  switch (action.type) {
    case SET_SEARCHBAR_TEXT: {
      return {
        ...state,
        searchBar: action.text,
      };
    }
    case SET_INBOX_DATA: {
      const inbox = processMessages(action.messages);
      return {
        ...state,
        inbox,
      };
    }
    default: return state;
  }
};
