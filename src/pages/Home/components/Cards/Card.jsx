import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./cards.module.css";
import PlaceholderPicture from "../../../../assets/img/placeholder_pictures.jpg";
import {
  ButtonAction,
  ViewLateralNumber,
  ViewLateralText,
} from "../../../../components";
import ROUTES_PATHS from "../../../../routes/routesPath";

const Card = ({ dataCard }) => {
  return (
    <article className={styles.card_placement}>
      <figure className={styles.card_cover_container}>
        <img
          className={styles.card_cover_image}
          src={PlaceholderPicture}
          alt="pictures"
        />
      </figure>
      <div className={styles.card_text_placement}>
        <h3
          className={
            dataCard.Titulo.length > 18
              ? styles.card_title_trunc
              : styles.card_title
          }
        >
          {dataCard.Titulo}
        </h3>

        <div>
          <ViewLateralNumber
            dataText="Dormitorios:"
            valueNumber={dataCard.CantidadDormitorios}
          />
          <ViewLateralNumber
            dataText="Cant. de Baños:"
            valueNumber={dataCard.CantidadBanios}
          />
          <ViewLateralNumber
            dataText="Precio:"
            valueNumber={"$" + dataCard.PrecioPorDia}
          />
          <ViewLateralText dataText="Estado:" valueText={dataCard.Estado} />
        </div>
      </div>
      <Link to={`${ROUTES_PATHS.baseDetail}${dataCard.idAlojamiento}`}>
        <ButtonAction message="Ver detalles" />
      </Link>
    </article>
  );
};

Card.propTypes = {
  dataCard: PropTypes.object,
};

export default Card;
