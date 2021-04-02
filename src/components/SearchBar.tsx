import { IonSearchbar } from "@ionic/react";

export interface SearchBarProps {
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <IonSearchbar placeholder={placeholder} />
  );
};
