import React from 'react';
import "./Country.css"

const Country = (props) => {

  const {name,  capital, area, car, continents,flags,  region, status} = props.country;
  return(
    <div className='country'>
    
     <h3>Name: {name.common} </h3>
     <img src={flags.png} alt="" />
     <p>Capital: {capital} </p>
     <p>Area: {area} </p>
     <p>Car driving Side: {car.side} </p>
     <p>Continents: {continents} </p>
     <p>Status: {status} </p>
     <p>Region: {region} </p>
    
   
    
    </div>
  )
};

export default Country;