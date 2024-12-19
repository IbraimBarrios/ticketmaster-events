import EventItem from "./components/EventItem";
import useEventData from "../../hooks/useEventsData";

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventData();

  const handleEventItemClick = (id) => {
    console.log("ticket: " + id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  if (isLoading) {
    return <div>Cargando Eventos...</div>;
  }

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
