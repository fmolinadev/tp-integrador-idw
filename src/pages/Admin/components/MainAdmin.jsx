import { DefineActionInControlAccommodationTipes, DefineActionInControlAccommodationPlace } from "../../../enums/defineAdminAction.enum";
import { AddNewPlace, AddNewType, DefaultAction, DeleteOneType, PutOneType, ViewAllPlaces, ViewAllTypes } from "./actions";

import styles from "./components.module.css";

const MainAdmin = ({ actionViewType, actionViewPlace }) => {
  return (
    <section className={styles.admin_actions_container}>
      {actionViewType === DefineActionInControlAccommodationTipes.VIEW ? (
        <ViewAllTypes />
      ) : actionViewType === DefineActionInControlAccommodationTipes.NEW ? (
        <AddNewType />
      ) : actionViewType === DefineActionInControlAccommodationTipes.EDIT ? (
        <PutOneType />
      ) : actionViewType === DefineActionInControlAccommodationTipes.DELETE ? (
        <DeleteOneType />
      ) : actionViewPlace === DefineActionInControlAccommodationPlace.NEW ? (
        <AddNewPlace />
      ) : actionViewPlace === DefineActionInControlAccommodationPlace.VIEW ? (
        <ViewAllPlaces />
      ) : (
        <DefaultAction />
      )}
    </section>
  );
};


export default MainAdmin;
