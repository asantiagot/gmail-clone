import { MailPageState } from '../models/MailPageState';
import { MailPageActionTypes, SET_SEARCHBAR_TEXT } from '../models/actions/MailPage.actions';

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
    default: return state;
  }
};
