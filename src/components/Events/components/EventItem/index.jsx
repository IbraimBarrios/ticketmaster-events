const EventItem = ({info, id, name, image, onEventClick}) => {
  return (
    <div>
      <img src={image} alt={name} width={200} height={200}/>
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={() => onEventClick(id)}>Ver mas</button>
    </div>
  );
};

export default EventItem;