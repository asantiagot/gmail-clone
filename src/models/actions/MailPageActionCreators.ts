import { MailPageActionTypes, SET_SEARCHBAR_TEXT } from "./MailPage.actions";

export const setSearchBarText = (text: string): MailPageActionTypes => {
  return {
    type: SET_SEARCHBAR_TEXT,
    text,
  };
};
