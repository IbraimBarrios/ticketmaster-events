import styles from './EventItem.module.css';
import HeartFilled from '../../../../assets/heart-filled.png';
import HeartUnfilled from '../../../../assets/heart-unfilled.png';

const EventItem = ({info, id, name, image, onEventClick}) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id)
  };

  const handleHeartClick = (evt) => {

  }

  return (
    <div onClick={() => {console.log("Padre")}} className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
        <img src={HeartUnfilled} alt="Heart button" className={styles.heartImage} onClick={handleHeartClick}/>
        <img src={image} alt={name} width={200} height={200} />
      </div>
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>Ver más</button>
      </div>
    </div>
  );
};

export default EventItem;