import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

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

  useImperativeHandle(ref, () => ({
    search,
    setSearch,
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
    <div
      ref={ref}
      style={{
        marginBottom: "15px",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p style={{ fontSize: 24, fontWeight: "bold" }}>Mi boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          value={search}
          placeholder="Busca tu evento"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
      </div>
      <Link
        to="/profile/my-info"
        style={{ marginLeft: 24, color: "#fff", textDecoration: "none" }}
      >
        Mi perfil
      </Link>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
