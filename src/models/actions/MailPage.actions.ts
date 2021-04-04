import { Messages } from "../Messages";

export const SET_SEARCHBAR_TEXT = 'SET_SEARCHBAR_TEXT;'
export const SET_INBOX_DATA = 'SET_INBOX_DATA';

interface SetSearchBarText {
  type: typeof SET_SEARCHBAR_TEXT;
  text: string;
}

interface SetInboxData {
  type: typeof SET_INBOX_DATA;
  messages: Messages;
}

export type MailPageActionTypes = 
  | SetSearchBarText 
  | SetInboxData;