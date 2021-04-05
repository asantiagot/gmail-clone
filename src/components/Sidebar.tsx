import { IonItem, IonList } from "@ionic/react";
import { MailCategoryIcon } from "./MailCategoryIcon";
import './Sidebar.css';
export interface SidebarProps {
  main: string[],
  extra: string[],
}

const MailCategoryButton: React.FC<{category: string}> = ({ category }) => (
  <button className="MailCategoryButton" >
    <MailCategoryIcon category={category} color="#757575" />
    <span className="Category">{category}</span>
  </button> 
);

export const Sidebar: React.FC<SidebarProps> = ({ main, extra }) => {
  return (
    <IonList lines="none">
      {main && main.map((category, i) => <IonItem key={i}><MailCategoryButton category={category} /></IonItem>)}
      {extra && extra.map((category, i) => <IonItem key={i}><MailCategoryButton category={category} /></IonItem>)}
    </IonList>
  );
}