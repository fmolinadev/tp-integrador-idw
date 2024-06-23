import React, { useState } from "react";

import AsideAdmin from "./AsideAdmin";
import MainAdmin from "./MainAdmin";
import styles from "../admin.module.css";
import { DefineActionInControlAccommodationPlace, DefineActionInControlAccommodationTipes } from "../../../enums/defineAdminAction.enum";

const PanelAdmin = () => {
  const [defineActionAccommodationTipes, setDefineActionAccommodationTipes] = useState(
    DefineActionInControlAccommodationTipes.DEFECTO
  );
  const [defineActionAccommodationPlace, setDefineActionAccommodationPlace] = useState(
    DefineActionInControlAccommodationPlace.DEFECTO
  );

  return (
    <div className={styles.admin_main_container}>
      <AsideAdmin defineActionType={setDefineActionAccommodationTipes} defineActionPlace={setDefineActionAccommodationPlace} />
      <MainAdmin actionViewType={defineActionAccommodationTipes} actionViewPlace={defineActionAccommodationPlace} />
    </div>
  );
};

export default PanelAdmin;
