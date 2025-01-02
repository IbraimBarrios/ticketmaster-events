// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import eventFetcher from "../../utils/fetchEvents";
import styles from "./Detail.module.css";

const pathname = window.location.pathname;
const resource = eventFetcher(pathname.substring(8, pathname.length));

const Detail = () => {
  const eventData = resource.eventDetail.read();

  // const { eventId } = useParams();
  // const [eventData, setEventData] = useState({});
  // const [error, setError] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const tiketMasterApiKey = import.meta.env?.VITE_TIKETMASTER_API_KEY;

  // useEffect(() => {
  //   const fetchEventData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${tiketMasterApiKey}`
  //       );
  //       const data = await response.json();

  //       setEventData(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setEventData({});
  //       setError(error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchEventData();
  // }, []);

  // if (isLoading && Object.keys(eventData).length === 0) {
  //   return <div>Cargando evento...</div>;
  // }

  // if (Object.keys(error).length > 0) {
  //   return <div>Ha ocurrido un error...</div>;
  // }

  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <img
          src={eventData.images?.[0].url}
          className={styles.eventImage}
          alt={eventData.name}
        />
        <h4 className={styles.eventName}>{eventData.name}</h4>
        <p className={styles.infoParagraph}>{eventData.info}</p>
        {eventData.dates?.start?.dateTime ? (
          <p className={styles.dateParagraph}>
            {format(
              new Date(eventData.dates?.start?.dateTime),
              "d LLLL yyyy H:mm",
              { locale: es }
            )}
            hrs
          </p>
        ) : null}
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.searMapTitle}>Mapa del evento</h6>
        <img src={eventData.seatmap?.staticUrl} alt="Seatmap event" />
        <p className={styles.pleaseNoteLengend}>{eventData.pleaseNote}</p>
        <p className={styles.priceRangeLegend}>
          Rango de precios: {eventData.priceRanges?.[0].min} -{" "}
          {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData.url} target="_black">
        {" "}
        Ir por tu boleto
      </a>
    </div>
  );
};

export default Detail;
