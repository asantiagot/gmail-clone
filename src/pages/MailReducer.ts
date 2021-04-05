import { MailPageState } from '../models/MailPageState';
import { MailPageActionTypes, SET_ACTIVE_INBOX, SET_INBOX_DATA, SET_SEARCHBAR_TEXT } from '../models/actions/MailPage.actions';
import { Messages } from '../models/Messages';
import { Mail } from '../models/Mail';
import { SidebarProps } from '../components/Sidebar';
import { SIDEBAR_DEFAULT_STATE } from '../models/Constants';
import { ActionSheetButton } from '@ionic/react';

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

const tagsReducer = (tags: string[], tag: string) => {
  if (!tags.includes(tag)) {
    tags.push(tag);
  } 
  return tags;
}

const getMessageTags = (message: Mail, initialValue: string[]) => {
  return message.tags.reduce(tagsReducer, initialValue);
};

const processMessages = (messages: Messages): [Messages, SidebarProps] => {
  const extraTags: string[] = [];
  for (let i = 0; i < messages.mailList.length; i++) {
    const body = messages.mailList[i].body;
    const subject = messages.mailList[i].subject;
    if (containsSpam(body) || containsSpam (subject)) {
      removeMail(messages.mailList, messages.mailList[i]);
    }
    getMessageTags(messages.mailList[i], extraTags);
  }
  const tags: SidebarProps= {
    ...SIDEBAR_DEFAULT_STATE,
    extra: extraTags,
  }
  return [messages, tags];
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
      const [inbox, tags] = processMessages(action.messages);
      return {
        ...state,
        inbox,
        tags,
      };
    }
    case SET_ACTIVE_INBOX: {
      const activeInbox = action.inbox.toUpperCase();
      return {
        ...state,
        activeInbox,
        tags: {
          ...state.tags,
          activeInbox,
        },
      };
    }
    default: return state;
  }
};
