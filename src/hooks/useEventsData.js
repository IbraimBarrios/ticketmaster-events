import { useState } from "react";

// Hook para hacer un llmado a la API de manera local
const useEventData = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const tiketMasterApiKey = import.meta.env?.VITE_TIKETMASTER_API_KEY;

  // load API call
  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${tiketMasterApiKey}&countryCode=MX${
          params?.length ? params : ""
        }`
      );
      const data = await response.json();

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return {
    events: data?._embedded?.events,
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventData;
