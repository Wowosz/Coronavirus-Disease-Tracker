import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

import Navbar from './Components/Navbar/Navbar';
import MainPanel from './Components/MainPanel/MainPanel';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState([]);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/countries')
    .then(response =>{
      setCountriesData(response.data);
      setCurrentCountry(response.data[0]);
    });
  }, []);

  const handleChangeCountry = (country) => {
    setCurrentCountry(country);
  }

  return (
    <div className="App">
      <h1>{currentCountry["country"]}</h1>
      <h3>Data From: {Date(currentCountry["updated"])}
      </h3>
      <MainPanel/>
      <Navbar countries={countriesData} handleChangeCountry={handleChangeCountry}/>
    </div>
  );
}

export default App;
