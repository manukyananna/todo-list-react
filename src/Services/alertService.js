import { NotificationManager } from "react-notifications";
import { confirmAlert } from 'react-confirm-alert';
import { ERROR_KEY, SUCCESS_KEY } from "../Constants/mainKeys";

class AlertService {
  static alert = (type, message) => {
    if(!message) { return; }
    switch (type) {
      case SUCCESS_KEY:
        NotificationManager.success('', message, 5000);
        break;
      case ERROR_KEY:
        NotificationManager.error('', message, 7000);
        break;
      default:
        break;
    }
  }

  static alertConfirm = (message) => {
    return new Promise((resolve, reject) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className="custom-ui">
              <p>{message}</p>
              <button className="yes" onClick={() => { resolve(); onClose(); }}>Yes</button>
              <button className="no" onClick={() => { reject(); onClose(); }}>No</button>
            </div>
          );
        }
      })
    })
  }
}

export default AlertService;