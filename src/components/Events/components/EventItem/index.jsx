import './style.css';

const EventItem = ({info, id, name, image, onEventClick}) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id)
  };

  return (
    <div onClick={() => {console.log("Padre")}} className='event-item-container'>
      <img src={image} alt={name} width={200} height={200}/>
      <div className='event-info-container'>
        <h4 className='event-name'>{name}</h4>
        <p className='event-info'>{info}</p>
        <button onClick={handleSeeMoreClick} className='see-more-btn'>Ver más</button>
      </div>
    </div>
  );
};

export default EventItem;