import { Messages } from "../Messages";

export const SET_SEARCHBAR_TEXT = 'SET_SEARCHBAR_TEXT;'
export const SET_INBOX_DATA = 'SET_INBOX_DATA';
export const SET_ACTIVE_INBOX = 'SET_ACTIVE_INBOX';

interface SetSearchBarText {
  type: typeof SET_SEARCHBAR_TEXT;
  text: string;
}

interface SetInboxData {
  type: typeof SET_INBOX_DATA;
  messages: Messages;
}

interface SetActiveInbox {
  type: typeof SET_ACTIVE_INBOX;
  inbox: string;
}

export type MailPageActionTypes = 
  | SetSearchBarText 
  | SetInboxData
  | SetActiveInbox;