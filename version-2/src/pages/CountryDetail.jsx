//import useParams and use it to access the URL parameter called countryName
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
export default function CountryDetail({ countries, day }) {
  console.log("CountryDetail day", day);
  //get this country's name from the URL parameter
  const countryName = useParams().countryName;
  //testing: console.log("Country Detail");
  //Get the back arrow symbol and convert to string
  let leftArrowIcon = String.fromCodePoint(0x2190);
  //Use find method to get country with the same name as the countryName in dynamic url
  let countryObject = countries.find(
    (country) => country.name.common === countryName
  );

  //testing: console.log("countryObject : ", countryObject);
  return (
    <>
      <main>
        <a href="/" className="country-detail-back-link">
          {" "}
          {leftArrowIcon} Back{" "}
        </a>
        <div className="country-detail">
          <Card country={countryObject} day={day}>
            <button className="country-detail-back-link"> Save </button>
          </Card>
        </div>
      </main>
    </>
  );
}
