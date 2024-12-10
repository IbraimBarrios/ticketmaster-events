import EventItem from "./components/EventItem";
import dataJSON from "../../data/events.json";
import { useState } from "react";

const Events = () => {
  const [data] = useState(dataJSON);
  const {_embedded: { events }} = data;

  const handleEventItemClick = (id) => {
    console.log("ticket: " + id);
  };

  const eventsComponent = events.map((eventItem)=> (
    <EventItem 
      key={`event-item-${eventItem.id}`} 
      name={eventItem.name} 
      info={eventItem.info} 
      image={eventItem.images[0].url} 
      onEventClick={handleEventItemClick}
      id={eventItem.id}
    />
  ));

  return (
    <div>
      Eventos
      {eventsComponent}
    </div>
  );
};

export default Events;