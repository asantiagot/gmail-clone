import { Messages } from "../Messages";
import { MailPageActionTypes, SET_INBOX_DATA, SET_SEARCHBAR_TEXT } from "./MailPage.actions";

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
}