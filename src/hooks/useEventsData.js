import { useState } from "react";
import eventsJSON from "../data/events.json";

const useEventData = () => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;

  return {
    events,
  };
};

export default useEventData;
