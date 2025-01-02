import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import ReactPaginate from "react-paginate";

import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsResults from "../../state/events-results";

import style from "./Home.module.css";

const Home = () => {
  const { data, error, isLoading, fetchEvents } = useEventsResults();

  const [isToggle, setIsToggle] = useState(false);

  const events = useMemo(
    () => data?._embedded?.events || [],
    [data?._embedded?.events]
  );
  const page = useMemo(() => data?.page || {}, [data?.page]);

  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  // Ejemplo para utilizar una referencia cuando solo se desea que se re-renderee una vez en useEffect.
  const fetchMyEventsRef = useRef();
  fetchMyEventsRef.current = fetchEvents;

  useEffect(() => {
    fetchMyEventsRef.current();
  }, []);

  const handleNavbarSearch = (word) => {
    setSearchTerm(word);
    fetchEvents(`&keyword=${word}`);
  };

  const handlePageClick = useCallback(
    ({ selected }) => {
      fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    },
    [searchTerm, fetchEvents]
  );

  const renderEvents = () => {
    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    if (isLoading) {
      return <div>Cargando Eventos...</div>;
    }

    return (
      <div>
        <button onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? "ON" : "OFF"}
        </button>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={style.paginate}
          nextClassName={style.next}
          previousClassName={style.previous}
          pageClassName={style.page}
          activeClassName={style.activePage}
          disabledClassName={style.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};

export default Home;
