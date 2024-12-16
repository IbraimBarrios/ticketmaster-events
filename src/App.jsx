import { useState } from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import './App.css'
import SignupForm from './components/SignupForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (word) => {
    setSearchTerm(word);
  };

  return (
    <>
      <SignupForm />

      <Navbar onSearch={handleNavbarSearch}/>
      <Events searchTerm={searchTerm}/>
    </>
  )
}

export default App
