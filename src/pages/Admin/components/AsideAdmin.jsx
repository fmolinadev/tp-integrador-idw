import { AddIcon, DeleteIcon, EditIcon, ListIcon } from "../../../common";
import { DefineActionInControlAccommodation } from "../../../enums/defineAdminAction.enum";
import styles from "./components.module.css";

const AsideAdmin = ({ defineAction }) => {
  const handlerDefineAction = (id) => {
    defineAction(id);
  };

  return (
    <aside className={styles.aside_container}>
      <h3 className={styles.panel_title}>Control de alojamiento</h3>
      <ul className={styles.list_container}>
        <li
          onClick={() =>
            handlerDefineAction(DefineActionInControlAccommodation.NEW)
          }
        >
          <AddIcon /> Crear nuevo
        </li>
        <li
          onClick={() =>
            handlerDefineAction(DefineActionInControlAccommodation.VIEW)
          }
        >
          <ListIcon />
          Ver todos
        </li>
        <li
          onClick={() =>
            handlerDefineAction(DefineActionInControlAccommodation.EDIT)
          }
        >
          <EditIcon />
          Editar
        </li>
        <li
          onClick={() =>
            handlerDefineAction(DefineActionInControlAccommodation.DELETE)
          }
        >
          <DeleteIcon />
          Eliminar
        </li>
      </ul>
    </aside>
  );
};

export default AsideAdmin;
