import { MailPageState } from '../models/MailPageState';
import { MailPageActionTypes, SET_ACTIVE_INBOX, SET_INBOX_DATA, SET_SEARCHBAR_TEXT, TAG_EMAIL } from '../models/actions/MailPage.actions';
import { Messages } from '../models/Messages';
import { Mail } from '../models/Mail';
import { SidebarProps } from '../components/Sidebar';
import { SIDEBAR_DEFAULT_STATE } from '../models/Constants';

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
  if (!tags.includes(tag)){
    tags.push(tag);
  } 
  return tags;
}

const getMessageTags = (message: Mail, initialValue: string[]) => {
  return message.tags.reduce(tagsReducer, initialValue);
};

const getMailIndex = (mailList: Mail[], index: string) => {
  return mailList.findIndex((mail) => mail.id === index);
};

const addTagToMail = (mailList: Mail[], index: string, tag: string): Mail[] => {
  const mailIndex = getMailIndex(mailList, index);
  mailList[mailIndex].tags.push(tag.toLowerCase());
  return mailList;
};

const removeElementFromInbox = (mailList: Mail[], index: string): Mail[] => {
  const mailIndex = getMailIndex(mailList, index);
  return mailList.splice(mailIndex, 1);
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
        original: {...inbox},
        inbox,
        tags,
      };
    }
    case SET_ACTIVE_INBOX: {
      const activeInbox = action.inbox.toUpperCase();
      switch (activeInbox) {
        case 'INBOX': {
          return {
            ...state,
            activeInbox,
            inbox: { ...state.original },
            tags: {
              ...state.tags,
              activeInbox,
            }
          }
        }
        default: {
          const messages = state.original.mailList.filter((mail) => mail.tags.includes(action.inbox));
          return {
            ...state,
            activeInbox,
            inbox: { mailList: messages },
            tags: {
              ...state.tags,
              activeInbox,
            },
          };
        }
      }
    }
    case TAG_EMAIL: {
      state.tags.extra.push(action.tag.toLowerCase());
      return {
        ...state,
        inbox: {
          mailList: addTagToMail(state.inbox.mailList, action.id, action.tag),
        },
        tags: {
          ...state.tags,
          extra: state.tags.extra.reduce(tagsReducer, []),
        },
      }
    }
    default: return state;
  }
};
