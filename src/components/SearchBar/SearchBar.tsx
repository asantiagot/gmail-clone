import { IonSearchbar } from "@ionic/react";
export interface SearchBarProps {
  placeholder: string;
  value: string;
  handleSearchbarChange?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, handleSearchbarChange }) => {
  return (
    <IonSearchbar 
      placeholder={placeholder} 
      value={value} 
      onIonChange=
        {(e) => handleSearchbarChange && handleSearchbarChange(e.detail.value!)} 
    />
  );
};
