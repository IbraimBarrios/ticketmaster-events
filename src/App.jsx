import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";
import SignupForm from "./components/SignupForm";
import Routes from "./routers";

function App() {
  /* 
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  const handleNavbarSearch = (word) => {
    console.log(containerRef.current.setSearch(""));
    setSearchTerm(word);
  };

  return (
    <>
      <SignupForm />

      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  );
  */

  return <Routes />;
}

export default App;
