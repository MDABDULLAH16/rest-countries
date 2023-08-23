import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>      
      
    </div>
  );
}

function LoadCountries () {
  const [countries, setCountries] =useState([]);
  useEffect( () => {
    fetch ("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data =>setCountries(data))
    

  }
 ,[])
  return(
    <div>
      <h1>Available countries: {countries.length}</h1>
     {
        countries.map(country=> <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
     }
    </div>
  )
  
}

function Country (props){
  return(
    <div>
      <image src={props.flags}/>
        <p>Name: {props.name}</p>
        <p>Population: {props.population}</p>
    </div>
  )
}
export default App;
