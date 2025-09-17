//import useParams and use it to access the URL parameter called countryName
import { useParams } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card.jsx";
export default function CountryDetail({ countries, day }) {
  //Declare an empty array to save country names
  const [savedCountryNames, setSavedCountryNames] = useState([]);
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

  const handleSave = () => {
    //Save the country only once
    //check if country not already present in savedCountryNames array
    if (!savedCountryNames.includes(countryName)) {
      //push country name in the savedCountries Array
      savedCountryNames.push(countryName);
      //Set array savedCountryNames using the setter/updater function
      setSavedCountryNames(savedCountryNames);
      //convert array to string
      let savedCountryNamesStrings = savedCountryNames.toString();
      //save stringified countryNames array  in localStorage
      localStorage.setItem("savedCountries", savedCountryNamesStrings);
    }
  };

  //testing: console.log("countryObject : ", countryObject);
  return (
    <>
      <main>
        <a
          href="/"
          className="country-detail-back-link"
          style={{
            backgroundColor: day ? "#FAFAFA" : "#202C36",
            color: day ? "black" : "white",
          }}
        >
          {" "}
          {leftArrowIcon} Back{" "}
        </a>
        <div className="country-detail">
          <Card country={countryObject} day={day}>
            <button
              className="country-detail-back-link"
              style={{
                backgroundColor: day ? "#FAFAFA" : "#202C36",
                color: day ? "black" : "white",
              }}
              onClick={handleSave}
            >
              {" "}
              Save{" "}
            </button>
          </Card>
        </div>
      </main>
    </>
  );
}
