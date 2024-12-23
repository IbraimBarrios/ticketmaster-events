import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventData from "../../hooks/useEventsData";

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventData();

  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (word) => {
    setSearchTerm(word);
    fetchEvents(`&keyword=${word}`);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {isLoading ? (
        <div>Cargando Eventos...</div>
      ) : (
        <Events searchTerm={searchTerm} events={events} />
      )}
      {!!error && <div>Ha ocurrido un error</div>}
    </>
  );
};

export default Home;
