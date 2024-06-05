import PropTypes from 'prop-types';
import styles from "../about.module.css";

const {image_container}=styles

function ImageView({legend,placeImage}) {
    return (<div className={image_container}>
        <figure><img src= {placeImage} alt="team"/>
        <legend>{legend} </legend></figure>
    </div>)
}
ImageView.propTypes = {
    legend: PropTypes.string, placeImage: PropTypes.string,
  };
export default ImageView