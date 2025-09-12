import { useState, useEffect } from "react";
//import CountryCard component
import CountryCard from "../components/CountryCard.jsx";
import { use } from "react";
export default function Home({ countriesData }) {
  //testing: console.log('Home Page');
  //testing: console.log('countries ', countriesData);
  //Get the heart symbol and convert to string
  let searchIcon = String.fromCodePoint(0x1f50d);
  const [region, setRegion] = useState("Filter by Region");
  const [countries, setCountries] = useState(countriesData);
  useEffect(() => {
    // setCountries(countriesData.filter((country) => country.region === region));
    if (region === "Filter by Region") {
      setCountries(countriesData);
    } else {
      setCountries(
        countriesData.filter((country) => country.region === region)
      );
    }
  }, [region]);
  return (
    <>
      <main>
        <div className="home-forms">
          <form className="search-form">
            <input
              placeholder={`${searchIcon} Search for a country...`}
              type="text"
            />
          </form>

          <form className="sort-form">
            <select
              name="continents"
              defaultValue="Filter by Region"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="Filter by Region"> Filter by Region </option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="parent">
          {/* map over countriesData and render using component CountryCard */}
          {countries.map((item, index) => (
            <CountryCard country={item} key={"country_" + index} />
          ))}
        </div>
      </main>
    </>
  );
}
