//import Routes, Route and Link from react-router-dom 
import { Routes, Route, Link } from 'react-router-dom';
//import pages
import Home from './pages/Home.jsx';
import SavedCountries from './pages/SavedCountries.jsx';
import CountryDetail from './pages/CountryDetail.jsx';
//import styles from App.css
import './App.css';
//import useState from React
import { useState, useEffect } from 'react';

function App() {
  
  //Using useState and array de-structuring declare variable "countryData" and function "setCountryData"
  const [countryData, setCountryData] = useState([]);
  //save API url in variable named "url"
  let url = 'https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders';

  const getCountriesDataAsyncAwait = async () => {
    try {
      //Fetch data from API and wait for it to finish.Save the value returned by the api call in a variable named 'response'. 
      const response = await fetch(
        url
      );    //Getting data from API takes time so we use the await keyword

      //convert response into JSON notation wait for this line ' await response.json();' to finish before we move to next line
      const data = await response.json();
      console.log(data);

      //Sort Countries in alphabetical order
      //Reference : https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));

      //Set country data using the setter/updater function setCountryData and passing on data
      setCountryData(data);     
    } catch (error) {
      console.log('Error Fetching API: ' + error);
    }
  };

  //useEffect to fetch data by making an API call for Countries
  useEffect(() => {
    //Call function getCountriesDataAsyncAwait(); that makes the API call
    getCountriesDataAsyncAwait();
  }, []);

  return (
    <div>
      <header>
      <nav>
          <ul>
            <li>
              <Link className='home-page' to="/">Where in the World</Link>
            </li>
            <li>
              <Link to="/savedcountries">Saved Countries </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home countriesData={countryData} />} />
        <Route path="/savedcountries" element={<SavedCountries  />} />
        <Route path="/country/:countryName" element={<CountryDetail countries={countryData} />} />
      </Routes>
    </div>
  );
}

//Export App to be used in Main.jsx
export default App;
