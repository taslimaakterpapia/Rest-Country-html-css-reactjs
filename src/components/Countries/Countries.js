import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))


  }, [])


  return (
    <div>
      <h1>Visiting All Country in the World!! </h1>
      <h2>Total Countries ={countries.length}</h2>
      <div className='countries-container'>
        {
          countries.map(country => console.log(country))
        }
        {
          countries.map(country => <Country
            country={country}
            key={country.cca3}
            > </Country>)
        }
      </div>
    </div>
  )


};

export default Countries;