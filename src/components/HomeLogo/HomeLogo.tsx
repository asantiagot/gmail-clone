import { IonImg } from "@ionic/react"

export interface HomeLogoProps {
  src: string;
  title: string;
  href?: string;
}
export const HomeLogo: React.FC<HomeLogoProps> = ({ src, title, href }) => {
  return (
    <a href={href} title={title}>
      <IonImg src={src}  />
    </a>
  );
};
