import { SearchBarProps } from "../components/SearchBar";
import { SidebarProps } from "../components/Sidebar";
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

export const SIDEBAR_DEFAULT_STATE: SidebarProps = {
  main: ['Inbox', 'Starred', 'Sent', 'Trash'],
  extra: [],
  activeInbox: 'INBOX',
  onClick: () => {},
};

export const MAIL_PAGE_DEFAULT_STATE: MailPageState = {
  original: INBOX_DEFAULT_STATE,
  inbox: INBOX_DEFAULT_STATE,
  searchBar: '',
  trash: {mailList: [] },
  tags: SIDEBAR_DEFAULT_STATE,
  activeInbox: 'INBOX',
};
