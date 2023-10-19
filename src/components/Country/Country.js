import React from 'react';
import "../Country/Country.css";

const Country = (props) => {

  const {name,  capital, area, car, continents,flags,  region, timezones, maps , status} = props.country;
  return(
    <div className='country'>
    
     <h3>Name: {name.common} </h3>
     <img src={flags.png} alt="" />
     <p>Capital: {capital} </p>
     <p>area: {area} </p>
     <p>Car driving Side: {car.side} </p>
     <p>Continents: {continents} </p>
     <p>status: {status} </p>
     <p>region: {region} </p>
     <p>time zones: {timezones} </p> 
         
     <p>google Maps: {maps.googleMaps} </p>
     <p>open Street Maps: {maps.openStreetMaps} </p>
     {/* <p>languages: {languages} </p> */}
     
    </div>
  )
};

export default Country;