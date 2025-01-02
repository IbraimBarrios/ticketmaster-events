import wrapPromise from "./wrapPromise";

const tiketMasterApiKey = import.meta.env?.VITE_TIKETMASTER_API_KEY;

const fetchEventDetail = async (eventId) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${tiketMasterApiKey}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = (eventId) => {
  return {
    eventDetail: wrapPromise(fetchEventDetail(eventId)),
  };
};

export default fetchData;
