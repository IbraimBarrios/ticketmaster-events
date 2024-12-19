import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
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

  useImperativeHandle(ref, ()=> ({
    search,
    setSearch
  }));

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div ref={ref}>
      <p>Mi boletera</p>
      <input
        value={search}
        placeholder="Busca tu evento"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
