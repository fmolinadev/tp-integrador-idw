import { AddIcon, DeleteIcon, EditIcon, ListIcon } from "../../../common";
import { DefineActionInControlAccommodationPlace, DefineActionInControlAccommodationTipes } from "../../../enums/defineAdminAction.enum";
import styles from "./components.module.css";

const AsideAdmin = ({ defineActionType, defineActionPlace }) => {
  const handlerDefineActionType = (id) => {
    defineActionType(id);
    
  };


   const handlerDefineActionPlace = (id) => {
    defineActionPlace(id);
    defineActionType(DefineActionInControlAccommodationTipes.DEFECTO)
  };

  return (
    <aside className={styles.aside_container}>
      <h3 className={styles.panel_title}>Tipos de alojamientos</h3>
      <ul className={styles.list_container}>
        <li
          onClick={() =>
            handlerDefineActionType(DefineActionInControlAccommodationTipes.NEW)
          }
        >
          <AddIcon /> Crear nuevo
        </li>
        <li
          onClick={() =>
            handlerDefineActionType(DefineActionInControlAccommodationTipes.VIEW)
          }
        >
          <ListIcon />
          Ver todos
        </li>
        <li
          onClick={() =>
            handlerDefineActionType(DefineActionInControlAccommodationTipes.EDIT)
          }
        >
          <EditIcon />
          Editar
        </li>
        <li
          onClick={() =>
            handlerDefineActionType(DefineActionInControlAccommodationTipes.DELETE)
          }
        >
          <DeleteIcon />
          Eliminar
        </li>
      </ul>
       <h3 className={styles.panel_title}>Alojamientos</h3>
      <ul className={styles.list_container}>
        <li
          onClick={() =>
            handlerDefineActionPlace(DefineActionInControlAccommodationPlace.NEW)
          }
        >
          <AddIcon /> Crear alojamiento
        </li>
        <li
          onClick={() =>
            handlerDefineActionPlace(DefineActionInControlAccommodationPlace.VIEW)
          }
        >
          <ListIcon />
          Ver alojamientos
        </li>
      </ul>
    </aside>
  );
};

export default AsideAdmin;
