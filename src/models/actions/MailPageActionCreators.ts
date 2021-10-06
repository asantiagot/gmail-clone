import { Messages } from "../Messages";
import { MailPageActionTypes, SET_ACTIVE_INBOX, SET_INBOX_DATA, SET_SEARCHBAR_TEXT, TAG_EMAIL, SEARCH_EMAIL, } from "./MailPage.actions";

export const setSearchBarText = (text: string): MailPageActionTypes => {
  return {
    type: SET_SEARCHBAR_TEXT,
    text,
  };
};

export const setInboxData = (messages: Messages): MailPageActionTypes => {
  return {
    type: SET_INBOX_DATA,
    messages,
  }
};

export const setActiveInbox = (inbox: string): MailPageActionTypes => {
  return {
    type: SET_ACTIVE_INBOX,
    inbox,
  };
};

export const tagEmail = (tag: string, id: string): MailPageActionTypes => {
  return {
    type: TAG_EMAIL,
    tag,
    id,
  };
};

export const searchInbox = (query: string): MailPageActionTypes => {
  return {
    type: SEARCH_EMAIL,
    query,
  }
} 
