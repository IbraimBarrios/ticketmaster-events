import { useState } from "react";

const useEventData = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // load API call
  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2A4wkCl2OldOqGGbJ7nv8UlBBIMYS0G8&countryCode=MX${
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
