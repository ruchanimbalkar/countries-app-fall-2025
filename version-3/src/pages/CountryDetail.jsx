//import useParams and use it to access the URL parameter called countryName
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
export default function CountryDetail({ countries, day }) {
  const [count, setCount] = useState(0);
  let visit = 0;
  //Declare an empty array to save country names
  const [savedCountryNames, setSavedCountryNames] = useState([]);
  console.log("line 8 savedCountryNames", savedCountryNames);
  console.log("typeof savedCountryNames", typeof savedCountryNames);
  let savedCountryNamesStrings = "";
  console.log("CountryDetail day", day);
  //get this country's name from the URL parameter
  const countryName = useParams().countryName;
  //testing: console.log("Country Detail");
  const [dataTooltipContent, setDataTooltipContent] = useState("Save Country");
  //Get the back arrow symbol and convert to string
  let leftArrowIcon = String.fromCodePoint(0x2190);
  //Use find method to get country with the same name as the countryName in dynamic url
  let countryObject = countries.find(
    (country) => country.name.common === countryName
  );
  console.log("countries ", countries);

  const saveOneCountry = async () => {
    const response = await fetch(
      "https://backend-answer-keys.onrender.com/save-one-country",
      {
        method: "POST",
        headers: {
          "content-type": "application/json ",
        },
        body: JSON.stringify({
          country_name: countryName,
        }),
      }
    );
    const reply = await response.json();
    console.log("response from post method: ", reply);
  };

  const handleSave = () => {
    //Save the country only once
    //check if country not already present in savedCountryNames array
    //backend-answer-keys.onrender.com/save-one-country
    saveOneCountry();
    setDataTooltipContent("Country Saved Already !");
  };

  const updateOneCountryCount = async () => {
    const response = await fetch(
      "https://backend-answer-keys.onrender.com/update-one-country-count",
      {
        method: "POST",
        headers: {
          "content-type": "application/json ",
        },
        body: JSON.stringify({
          country_name: countryName,
        }),
      }
    );
    const reply = await response.json();
    console.log("response from post method: ", reply);
    setCount(reply.count);
  };

  //check for previously saved countries on initial render
  useEffect(() => {
    //Check if there is a savedCountry in localStorage and length > 0
    if (
      localStorage.getItem("savedCountries") &&
      localStorage.getItem("savedCountries").length > 0
    ) {
      //convert the String back to parse using JSON.parse
      let countryNamesArray = JSON.parse(
        localStorage.getItem("savedCountries")
      );
      console.log("countryNamesArray ", countryNamesArray);
      setSavedCountryNames(countryNamesArray);
    }

    //Country count
    //Version -3 Send POST request to update count in API in function updateOneCountryCount()
    updateOneCountryCount();
  }, []);
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
          <Card country={countryObject} day={day} viewed={count}>
            <button
              className="country-detail-back-link"
              style={{
                backgroundColor: day ? "#FAFAFA" : "#202C36",
                color: day ? "black" : "white",
              }}
              onClick={handleSave}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={dataTooltipContent}
              data-tooltip-place="top"
            >
              {" "}
              Save{" "}
            </button>
            <Tooltip id="my-tooltip" />
          </Card>
        </div>
      </main>
    </>
  );
}
