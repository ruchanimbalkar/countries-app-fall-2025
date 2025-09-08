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
  //save url in variable named "url"
  let url = 'https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region';

  //useEffect to fetch data by making an API call for Countries
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //Sort Countries in alphabetical order
        //Reference : https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        data.sort((a, b) => a.name.official.localeCompare(b.name.official));
        setCountryData(data);
      })
      .catch((err) => console.log('Error Fetching API : ', err));
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
        <Route path="/countrydetail" element={<CountryDetail  />} />
      </Routes>
    </div>
  );
}

//Export App to be used in Main.jsx
export default App;
