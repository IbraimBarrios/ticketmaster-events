import { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("1010 useEffect...");
  }, [search, onSearch]);

  // ejemplos de useEffect
  // sepueden tener hasta N cantidades de useEffect pero no hay que sobre pasar
  // la cantidad de useEffect para no probocar errores
  // useEffect(()=> {
  //   console.log("Se monto el componente...");
  // }, []);

  // useEffect(()=> {
  //   console.log("Search cambio...");
  // }, [search]);

  // useEffect(()=> {
  //   console.log("onSearch Cambio...");
  // }, [onSearch]);

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div>
      <p>Mi boletera</p>
      <input
        value={search}
        placeholder="Busca tu evento"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
};

export default Navbar;
