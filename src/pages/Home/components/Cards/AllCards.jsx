import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./cards.module.css";
import NoResult from "./NoResult";
const AllCards = ({ results }) => {
  return (
    <section
      className={
        results.length > 0
          ? styles.all_cards_container
          : styles.card_no_result_container
      }
    >
      {results.length > 0 ? (
        results.map((dataCard, index) => {
          return <Card key={index + " card"} dataCard={dataCard} />;
        })
      ) : (
        <NoResult />
      )}
    </section>
  );
};

AllCards.propTypes = {
  results: PropTypes.array,
};

export default AllCards;
