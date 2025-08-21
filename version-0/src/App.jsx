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
        <Route path="/" element={<Home />} />
        <Route path="/savedcountries" element={<SavedCountries  />} />
        <Route path="/countrydetail" element={<CountryDetail  />} />
      </Routes>
    </div>
  );
}

export default App;
