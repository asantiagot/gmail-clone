import { SidebarProps } from "../components/Sidebar/Sidebar";
import { Messages } from "./Messages";

export interface MailPageState {
  searchBar: string;
  original: Messages;
  inbox: Messages;
  trash: Messages;
  tags: SidebarProps;
  activeInbox: string;
}