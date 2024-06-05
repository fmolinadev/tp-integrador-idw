import { useState } from "react";
import AdminAuth from "./components/AdminAuth";
import PanelAdmin from "./components/PanelAdmin";
import styles from "./admin.module.css";

function AdminPage() {
  const [haveLogin, setHaveLogin] = useState(false);

  const handlerShowPanel = () => {
    setHaveLogin(true);
  };

  return (
    <div className={styles.main_container}>
      {haveLogin ? (
        <div className={styles.main_panel_container}>
          <PanelAdmin />
        </div>
      ) : (
        <div className={styles.main_auth_container}>
          <AdminAuth actionState={handlerShowPanel} />
        </div>
      )}
    </div>
  );
}

export default AdminPage;
