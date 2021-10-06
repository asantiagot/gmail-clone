import { Messages } from "../Messages";

export const SET_SEARCHBAR_TEXT = 'SET_SEARCHBAR_TEXT;'
export const SET_INBOX_DATA = 'SET_INBOX_DATA';
export const SET_ACTIVE_INBOX = 'SET_ACTIVE_INBOX';
export const TAG_EMAIL = 'TAG_EMAIL';
export const SEARCH_EMAIL = 'SEARCH_EMAIL';

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

interface FlagEmail {
  type: typeof TAG_EMAIL;
  tag: string; 
  id: string;
}

interface SearchEmail {
  type: typeof SEARCH_EMAIL;
  query: string;
}

export type MailPageActionTypes = 
  | SetSearchBarText 
  | SetInboxData
  | SetActiveInbox
  | FlagEmail
  | SearchEmail;