//import Routes, Route and Link from react-router-dom
import { Routes, Route, Link } from "react-router-dom";
//import component
import Toggle from "./components/Toggle.jsx";
//import pages
import Home from "./pages/Home.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import CountryDetail from "./pages/CountryDetail.jsx";
//import styles from App.css
import "./App.css";
//import useState from React
import { useState, useEffect } from "react";

function App() {
  //Using useState and array de-structuring declare variable "countriesData" and function "setcountriesData"
  const [countriesData, setCountriesData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [day, setDay] = useState(false);
  function handleChange(checked) {
    setChecked(checked);
    setDay(!day);
  }
  //Get the heart symbol and convert to string
  let HeartIcon = String.fromCodePoint(0x2661);
  //save API url in variable named "url"
  let url =
    "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders";

  const getCountriesDataAsyncAwait = async () => {
    try {
      //Fetch data from API and wait for it to finish.Save the value returned by the api call in a variable named 'response'.
      const response = await fetch(url); //Getting data from API takes time so we use the await keyword

      //convert response into JSON notation wait for this line ' await response.json();' to finish before we move to next line
      const data = await response.json();
      console.log("data ", data);

      //Sort Countries in alphabetical order
      //Reference : https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));

      //Set country data using the setter/updater function setcountriesData and passing on data
      setCountriesData(data);
    } catch (error) {
      console.log("Error Fetching API: " + error);
    }
  };

  //useEffect to fetch data by making an API call for Countries
  useEffect(() => {
    //Call function getCountriesDataAsyncAwait(); that makes the API call
    getCountriesDataAsyncAwait();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: day ? "#FAFAFA" : "#202C36",
        color: day ? "black" : "white",
      }}
    >
      <header
        style={{
          backgroundColor: day ? "white" : " #2b3844",
          color: day ? "black" : "white",
        }}
      >
        <nav>
          <ul>
            <li>
              <Link className="home-page" to="/">
                Where in the World
              </Link>
            </li>
            <li>
              <Link to="/savedcountries">{HeartIcon}Saved Countries </Link>
            </li>
          </ul>
        </nav>
        <Toggle className="toggle" onChange={handleChange} checked={checked} />
      </header>

      <Routes>
        <Route
          path="/"
          element={<Home countriesData={countriesData} day={day} />}
        />
        <Route
          path="/savedcountries"
          element={<SavedCountries countriesData={countriesData} day={day} />}
        />
        <Route
          path="/country/:countryName"
          element={<CountryDetail countries={countriesData} day={day} />}
        />
      </Routes>
    </div>
  );
}

//Export App to be used in Main.jsx
export default App;
