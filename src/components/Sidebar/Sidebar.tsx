import { IonItem, IonList } from "@ionic/react";
import { MailCategoryIcon } from "../Misc/MailCategoryIcon";
import './Sidebar.css';
export interface SidebarProps {
  main: string[];
  extra: string[];
  activeInbox: string;
  onClick: (inbox: string) => void;
}

const MailCategoryButton: React.FC<{category: string; activeInbox: string; onClick: (inbox: string) => void}> = ({ category, activeInbox, onClick }) => {
  const isCategoryActive = activeInbox === category.toUpperCase();
  return (
    <button className={'MailCategoryButton'} id={`${isCategoryActive ? `activeCategory` : null }`} onClick={() => onClick(category)}>
      <MailCategoryIcon category={category} isCategoryActive={isCategoryActive} />
      <span className="Category">{category}</span>
    </button> 
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ main, extra, activeInbox, onClick }) => {
  return (
    <IonList lines="none">
      {main && main.map((category, i) => <IonItem key={i}><MailCategoryButton category={category} activeInbox={activeInbox} onClick={onClick} /></IonItem>)}
      {extra && extra.map((category, i) => <IonItem key={i}><MailCategoryButton category={category} activeInbox={activeInbox} onClick={onClick} /></IonItem>)}
    </IonList>
  );
}