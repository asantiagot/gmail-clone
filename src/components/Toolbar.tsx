import { IonIcon } from "@ionic/react";
import { squareOutline, trashBin } from "ionicons/icons";

export const Toolbar: React.FC = () => {
  return (
    <table className="MailTable">
      <tbody className="MailTableBody">
        <tr className="Toolbar">
          <td>
            <button className="MailRowButton">
              <IonIcon icon={squareOutline} />
            </button>
            <button className="MailRowButton">
              <IonIcon icon={trashBin} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
