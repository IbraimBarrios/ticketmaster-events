import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = (evt) => {
    setSearch(evt.target.value); 
  };

  return (
    <div>
      <p>Mi boletera</p>
      <input value={search} placeholder="Busca tu evento" onChange={handleInputChange}/>
    </div>
  );
};

export default Navbar;