import { Messages } from "./Messages";

export interface MailPageState {
  searchBar: string;
  inbox: Messages;
  trash: Messages;
}