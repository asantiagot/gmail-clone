export const SET_SEARCHBAR_TEXT = 'SET_SEARCHBAR_TEXT;'

interface SetSearchBarText {
  type: typeof SET_SEARCHBAR_TEXT;
  text: string;
}

export type MailPageActionTypes = | SetSearchBarText;