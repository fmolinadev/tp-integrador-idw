import { AddIcon, DeleteIcon, EditIcon, ListIcon } from "../../../common";
import { DefineActionInControlAccommodationPlace, DefineActionInControlAccommodationTipes, DefineActionServices } from "../../../enums/defineAdminAction.enum";
import styles from "./components.module.css";

const AsideAdmin = ({ defineActionType, defineActionPlace,defineActionService }) => {

  const handlerDefineActionType = (id) => {
    defineActionType(id);
  };

   const handlerDefineActionPlace = (id) => {
    defineActionPlace(id);
    defineActionType(DefineActionInControlAccommodationTipes.DEFECTO)
  };

    const handlerDefineService = (id) => {
    defineActionService(id);
    
   
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
       <h3 className={styles.panel_title}>Servicios</h3>
      <ul className={styles.list_container}>
        <li
          onClick={() =>
            handlerDefineService(DefineActionServices.NEW)
          }
        >
          <AddIcon /> Crear nuevo
        </li>
        <li
          onClick={() =>
            handlerDefineService(DefineActionServices.VIEW)
          }
        >
          <ListIcon />
          Ver todos
        </li>
        <li
          onClick={() =>
            handlerDefineService(DefineActionServices.EDIT)
          }
        >
          <EditIcon />
          Editar
        </li>
        <li
          onClick={() =>
            handlerDefineService(DefineActionServices.DELETE)
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
