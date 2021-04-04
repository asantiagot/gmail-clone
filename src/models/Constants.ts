import { SearchBarProps } from "../components/SearchBar";
import { Mail } from "./Mail";
import { MailPageState } from "./MailPageState";
import { Messages } from "./Messages";

export const SEARCHBAR_DEFAULT_STATE: SearchBarProps = {
  placeholder: 'Search mail',
  value: '',
};

export const MAIL_DEFAULT_STATE: Mail = {
  id: '', body: '', date: '', sender: '', subject: '', tags: [],
};

export const INBOX_DEFAULT_STATE: Messages = { mailList: [MAIL_DEFAULT_STATE] };

export const MAIL_PAGE_DEFAULT_STATE: MailPageState = {
  inbox: INBOX_DEFAULT_STATE,
  searchBar: '',
  trash: {mailList: [] },
}