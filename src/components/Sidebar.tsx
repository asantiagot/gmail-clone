import { IonButton, IonItem, IonList, IonText } from "@ionic/react";
import { MailCategoryIcon } from "./MailCategoryIcon";

export interface SidebarProps {
  main: string[],
  extra: string[],
}

const MailCategoryButton: React.FC<{category: string}> = ({ category }) => (
  <IonButton>
    <MailCategoryIcon category={category} />
    <IonText>{category}</IonText>
  </IonButton> 
);

export const Sidebar: React.FC<SidebarProps> = ({ main, extra }) => {
  return (
    <IonList lines="none">
      {main && main.map((category, i) => <IonItem key={i}><MailCategoryButton category={category} /></IonItem>)}
      {extra && extra.map((category, i) => <IonItem key={i}><MailCategoryButton category={category} /></IonItem>)}
    </IonList>
  );
}