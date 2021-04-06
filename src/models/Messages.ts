import { Mail } from "./Mail";

export interface Messages {
  mailList: Mail[];
  onClick?: (tag: string, id: string) => void;
}