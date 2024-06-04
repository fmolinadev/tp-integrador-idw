import { DefineActionInControlAccommodation } from "../../../enums/defineAdminAction.enum";
import AddNewType from "./actions/AddNewType";
import DEfaultAction from "./actions/DEfaultAction";
import DeleteOneType from "./actions/DeleteOneType";
import PutOneType from "./actions/PutOneType";
import ViewAllTypes from "./actions/ViewAllTypes";
import styles from "./components.module.css";

const MainAdmin = ({ actionView }) => {
  return (
    <section className={styles.admin_actions_container}>
      {actionView === DefineActionInControlAccommodation.VIEW ? (
        <ViewAllTypes />
      ) : actionView === DefineActionInControlAccommodation.NEW ? (
        <AddNewType />
      ) : actionView === DefineActionInControlAccommodation.EDIT ? (
        <PutOneType />
      ) : actionView === DefineActionInControlAccommodation.DELETE ? (
        <DeleteOneType />
      ) : (
        <DEfaultAction />
      )}
    </section>
  );
};

export default MainAdmin;
