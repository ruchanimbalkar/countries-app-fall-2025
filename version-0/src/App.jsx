//import Routes, Route and Link from react-router-dom 
import { Routes, Route, Link } from 'react-router-dom';
//import pages
import Home from './pages/Home.jsx';
import SavedCountries from './pages/SavedCountries.jsx';
import CountryDetail from './pages/CountryDetail.jsx';
//import styles from App.css
import './App.css';
//import localData from localData.js
import localData from '../localData.js';

function App() {
  //Sort Countries in alphabetical order
  //Reference : https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  let dataFromLocalFile = localData.sort((a,b) => a.name.official.localeCompare(b.name.official));
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
        <Route path="/" element={<Home countriesData={dataFromLocalFile} />} />
        <Route path="/savedcountries" element={<SavedCountries  />} />
        <Route path="/countrydetail" element={<CountryDetail  />} />
      </Routes>
    </div>
  );
}

//Export App to be used in Main.jsx
export default App;
