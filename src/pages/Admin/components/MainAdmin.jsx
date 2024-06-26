import { DefineActionInControlAccommodationTipes, DefineActionInControlAccommodationPlace, DefineActionServices } from "../../../enums/defineAdminAction.enum";
import { AddNewPlace, AddNewService, AddNewType, DefaultAction, DeleteOneService, DeleteOneType, PutOneService, PutOneType, ViewAllPlaces, ViewAllServices, ViewAllTypes } from "./actions";

import styles from "./components.module.css";

const MainAdmin = ({ actionViewType, actionViewPlace, avtionService }) => {
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
      ) : avtionService === DefineActionServices.NEW ? (
        <AddNewService />
      ) : avtionService === DefineActionServices.EDIT ? (
        <PutOneService />
      ) : avtionService === DefineActionServices.DELETE ? (
        <DeleteOneService />
      ) : avtionService === DefineActionServices.VIEW ? (
        <ViewAllServices />
      ) : (
        <DefaultAction />
      )}
    </section>
  );
};


export default MainAdmin;
