import { useState, useRef, useEffect } from "react";
import ReactPaginate from "react-paginate";

import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventData from "../../hooks/useEventsData";

import style from "./Home.module.css";

const Home = () => {
  const { events, isLoading, error, page, fetchEvents } = useEventData();

  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (word) => {
    setSearchTerm(word);
    fetchEvents(`&keyword=${word}`);
  };

  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  const renderEvents = () => {
    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    if (isLoading) {
      return <div>Cargando Eventos...</div>;
    }

    return (
      <div>
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
