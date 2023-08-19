import { useEffect, useState } from 'react';
import './Card.css';
const Card = ({ searchQuery }) => {
  const [country, setCountryData] = useState([]);

  useEffect(() => {
    onInIt();
  }, [searchQuery]);

  const onInIt = () => {
    if (searchQuery.length) {
      fetch('https://restcountries.com/v3.1/name/' + searchQuery)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.length) {
            setCountryData(data);
          } else {
            return <div>No Country Matched</div>;
          }
        });
    }
  };

  console.log(country, 'country');
  return (
    <div className="card-container">
      {country?.map((country, index) => (
        <div className="card" key={index}>
          <img
            className="card-image"
            src={country.flags.png}
            alt="Flag"
            style={{ width: '100px', height: 'auto' }}
          />
          <p className="card-title">Country Name: {country.name.common}</p>
          <p className="card-title">Capital: {country.capital}</p>
          <p className="card-text">Area: {country.area} square kilometers</p>
          <p className="card-text">Population: {country.population}</p>
          {/* <p className="card-text">
            Currency: {Object.keys(country.currencies).join(', ')}
          </p> */}
          {/* <p className="card-text">
            Language: {Object.values(country.languages).join(', ')}
          </p>  */}
        </div>
      ))}
    </div>
  );
};
export default Card;
