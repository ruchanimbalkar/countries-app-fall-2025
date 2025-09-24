//import styles
import "./CountryCard.css";
//import Link from react-router-dom
import { Link } from "react-router-dom";
//import card componenet
import Card from "../components/Card.jsx";
export default function CountryCard({ country, day }) {
  return (
    <>
      {/* Return country card with official name, population, region and capital */}
      <Link to={`/country/${country.name.common}`}>
        <div
          className="country-card"
          style={{
            backgroundColor: day ? "white" : " #2b3844",
            color: day ? "black" : "white",
          }}
        >
          <Card country={country} />
        </div>
      </Link>
    </>
  );
}
