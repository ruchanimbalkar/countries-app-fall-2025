import { useState } from "react";
//import CountryCard component
import CountryCard from "../components/CountryCard.jsx";
export default function Home({ countriesData, day }) {
  const [searchCountry, setSearchCountry] = useState("");
  //Declare an emptyFormState variable of type object to reset the form data
  const emptyFormState = { searchTerm: "" };
  //Declare a formData variable and assign it the value of the emptyFormState variable using useState. Also declare the setter/updater function setFormData
  const [formData, setFormData] = useState(emptyFormState);
  //console.log("Home day", day);
  const [showCountries, setShowCountries] = useState(true);
  //Declare a variable named region and assign it the value of empty string using useState.Also declare the setter/updater function setRegion
  const [region, setRegion] = useState("");

  //testing: console.log('Home Page');
  //testing: console.log('countries ', countriesData);
  //Get the heart symbol and convert to string
  let searchIcon = String.fromCodePoint(0x1f50d);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checked = e.target.checked;
    //console.log(name, value, checked);
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSearchSubmit = (event) => {
    //prevent default form behavior
    event.preventDefault();
    console.log("searchTerm", formData.searchTerm);
    //find the country from countriesData
    let countryObject = countriesData.find(
      (country) => country.name.common === formData.searchTerm
    );
    console.log("countryObject", countryObject);
    if (countryObject === undefined) {
      setShowCountries(false);
    } else {
      setShowCountries(true);
    }
    //setSearchCountry to searchTerm from formData
    setSearchCountry(formData.searchTerm);
    //resets the form to its initial state so it is ready for the next search
    setFormData(emptyFormState);
  };

  //Declare an arrow function that  returns countries filtered by region or just returns all countries
  const checkCountriesData = () => {
    //if searchCountry is an empty String, show all data
    if (searchCountry === "") {
      //if region is an empty string or "Filter by Data"
      if (region === "" || region === "Filter by Data") {
        //return all countries data
        return countriesData;
      } else {
        //return countries in that region
        return countriesData.filter((country) => country.region === region);
      }
    } else {
      return countriesData.filter(
        (country) => country.name.common === searchCountry
      );
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
          <form onSubmit={handleSearchSubmit}>
            <input
              placeholder={`${searchIcon} Search for a country...`}
              type="text"
              name="searchTerm"
              onChange={handleChange}
            />
            <input type="submit" hidden />
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
          {showCountries ? (
            checkCountriesData().map((item, index) => (
              <CountryCard country={item} key={"country_" + index} day={day} />
            ))
          ) : (
            <h2> Sorry country not found! </h2>
          )}
        </div>
      </main>
    </>
  );
}

// useState for showSavedCOuntries. Initial value is false
//Once the user submits a search, update showSavedCOuntries to be true
//in the JSX, a ternary - if it's false, show the H2. If its true, render the country card
