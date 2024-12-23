import { useEffect, useState } from "react";

const useEventData = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // load API call
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2A4wkCl2OldOqGGbJ7nv8UlBBIMYS0G8&countryCode=MX"
        );
        const data = await response.json();

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchEvents();
  }, []);

  return {
    events: data?._embedded?.events,
    isLoading,
    error,
  };
};

export default useEventData;
