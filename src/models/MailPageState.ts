import { SidebarProps } from "../components/Sidebar";
import { Messages } from "./Messages";

export interface MailPageState {
  searchBar: string;
  inbox: Messages;
  trash: Messages;
  tags: SidebarProps;
}