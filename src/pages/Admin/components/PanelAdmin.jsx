import React, { useState } from "react";

import AsideAdmin from "./AsideAdmin";
import MainAdmin from "./MainAdmin";
import styles from "../admin.module.css";
import { DefineActionInControlAccommodation } from "../../../enums/defineAdminAction.enum";

const PanelAdmin = () => {
  const [defineAction, setDefineAction] = useState(
    DefineActionInControlAccommodation.DEFECTO
  );

  return (
    <div className={styles.admin_main_container}>
      <AsideAdmin defineAction={setDefineAction} />
      <MainAdmin actionView={defineAction} />
    </div>
  );
};

export default PanelAdmin;
