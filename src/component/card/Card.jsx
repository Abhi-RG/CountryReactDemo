import { useEffect, useState } from "react";
import "./Card.css";
const Card = ({ searchQuery }) => {
  const [country, setCountryData] = useState([]);

  useEffect(() => {
    onInIt();
  }, [searchQuery]);

  // const onInIt = () => {
  //   if (searchQuery.length) {
  //     fetch("https://restcountries.com/v3.1/name/" + searchQuery)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         if (data.length) {
  //           setCountryData(data);
  //         }
  //       });
  //   }
  // };

  const onInIt = async () => {
    if (searchQuery.length) {
      const fetchData = await fetch(
        "https://restcountries.com/v3.1/name/" + searchQuery
      );
      const response = await fetchData.json();
      setCountryData(response);
    }
  };

  console.log(country);

  return (
    <div className="card-container">
      {!searchQuery ? (
        <div>
          <p className="card-title">Please Enter a Country</p>
        </div>
      ) : country.length && searchQuery ? (
        country?.map((country, index) => (
          <div className="card" key={index}>
            <div className="card-image-container">
              <img
                className="card-image"
                src={country.flags.png}
                alt="Flag"
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div className="card-content">
              <p className="card-title">Country Name: {country.name.common}</p>
              <p className="card-title">Capital: {country.capital}</p>
              <p className="card-text">
                Area: {country.area} square kilometers
              </p>
              <p className="card-text">Population: {country.population}</p>
              <p className="card-text">
                Currency:{" "}
                {country?.currencies
                  ? Object.keys(country?.currencies)?.join(", ")
                  : "NA"}
              </p>
              <p className="card-text">
                Language:{" "}
                {country?.languages
                  ? Object.values(country?.languages)?.join(", ")
                  : "NA"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className="card-title">No Match Found</p>
        </div>
      )}
    </div>
  );
};
export default Card;
