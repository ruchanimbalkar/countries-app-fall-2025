import { useState, useEffect } from "react";
//import CountryCard component
import CountryCard from "../components/CountryCard.jsx";
export default function Home({ countriesData, day }) {
  console.log("Home day", day);
  //testing: console.log('Home Page');
  //testing: console.log('countries ', countriesData);

  //Get the heart symbol and convert to string
  let searchIcon = String.fromCodePoint(0x1f50d);
  const [region, setRegion] = useState("");
  const checkCountriesData = () => {
    if (region === "" || region === "Filter by Data") {
      return countriesData;
    } else {
      return countriesData.filter((country) => country.region === region);
    }
  };

  return (
    <>
      <main>
        <div
          className="home-forms"
          // style={{
          //   backgroundColor: day ? "white" : "black",
          //   color: day ? "black" : "white",
          // }}
        >
          <form>
            <input
              placeholder={`${searchIcon} Search for a country...`}
              type="text"
              name="searchTerm"
            />
          </form>

          <form className="sort-form">
            <select
              name="continents"
              defaultValue="Filter by Data"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value=""> Filter by Region</option>
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
          {checkCountriesData().map((item, index) => (
            <CountryCard country={item} key={"country_" + index} day={day} />
          ))}
        </div>
      </main>
    </>
  );
}
