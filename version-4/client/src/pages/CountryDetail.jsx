//import useParams and use it to access the URL parameter called countryName
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
//Reference : https://react-tooltip.com/docs/getting-started
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import SaveToggle from "../components/SaveToggle.jsx";
export default function CountryDetail({ countries, day }) {
  //Declare a state variable and setter/upsetter method
  const [anchorElementText, setAnchorElementText] = useState("Save");
  //Declare a count variable and setter/upsetter method setCount() using useState
  const [count, setCount] = useState(0);
  //Declare a state variable checked and the corresponding setter method with intial boolean value false for save Toggle
  const [checked, setChecked] = useState(false);
  //Declare dataTooltipContent using useState for the save button with initial value "Save Country"
  const [dataTooltipContent, setDataTooltipContent] = useState("Save Country");
  //testing day/night mode: console.log("CountryDetail day", day);
  //get this country's name from the URL parameter
  const countryName = useParams().countryName;
  //Get the back arrow symbol and convert to string
  let leftArrowIcon = String.fromCodePoint(0x2190);
  //Use find method to get country with the same name as the countryName in dynamic url
  let countryObject = countries.find(
    (country) => country.name.common === countryName
  );

  //Declare an arrow function handleChange to save or unsave country
  const handleChange = (checked) => {
    console.log("checked", checked);
    checked === true ? handleSave() : unSaveOneCountry();
    setChecked(checked);
  };
  //Declare an Event handler arrow function when user clicks the save button
  const handleSave = () => {
    //Call arrow function saveOneCountry() to send country to the server
    saveOneCountry();
    //Update Tooltip using the setter function with value "Country Saved Already !" once the country is saved
    setDataTooltipContent("Country Saved!");
    setAnchorElementText("Unsave");
  };

  //Declare an arrow function saveOneCountry that is asynchronus and sends country to be saved to the server
  const saveOneCountry = async () => {
    //Send a POST request to the API with base url and endpoint /save-one-country with headers and body
    const response = await fetch("/api/save-one-country", {
      method: "POST",
      //The content type header tells the server that we are sending JSON data
      headers: {
        "content-type": "application/json ",
      },
      //The request body contains the data to be stored
      body: JSON.stringify({
        country_name: countryName,
      }),
    });
    //Guard Clause
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      // Exit early
      return;
    }
    //Every request gets a response : Convert the response to JSON format using json() method
    const responseInTextFormat = await response.text();
    //print response on console
    console.log("response from post method Save: ", responseInTextFormat);
  };

  //Declare an arrow function saveOneCountry that is asynchronus and sends country to be saved to the server
  const unSaveOneCountry = async () => {
    //Send a POST request to the API with base url and endpoint /save-one-country with headers and body
    const response = await fetch("/api/unsave-one-country", {
      method: "POST",
      //The content type header tells the server that we are sending JSON data
      headers: {
        "content-type": "application/json ",
      },
      //The request body contains the data to be stored
      body: JSON.stringify({
        country_name: countryName,
      }),
    });
    //Guard Clause
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      // Exit early
      return;
    }
    //Every request gets a response : Convert the response to JSON format using json() method
    const responseInTextFormat = await response.text();
    //print response on console
    console.log("response from post method for unSave: ", responseInTextFormat);
    setDataTooltipContent("Country un-saved!");
    setAnchorElementText("Save");
  };

  //Declare an arrow function updateOneCountryCount that is asynchronus and sends country Name to update count at the server
  const updateOneCountryCount = async () => {
    //Send a POST request to the API with base url and endpoint /update-one-country-count with headers and body
    const response = await fetch("/api/update-one-country-count", {
      method: "POST",
      //The content type header tells the server that we are sending JSON data
      headers: {
        "content-type": "application/json ",
      },
      //The request body contains the data to be stored
      body: JSON.stringify({
        country_name: countryName,
      }),
    });
    //Guard Clause
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      // Exit early
      return;
    }
    //Convert response in JSON format using json() method
    const responseInJSONFormat = await response.json();
    console.log("response from post method: ", responseInJSONFormat);
    //Get count from responseInJSONFormat using dot notation and update count using the setter function
    setCount(responseInJSONFormat.count);
  };

  //useEffect will be called on inital render as there is an empty dependecy array
  useEffect(() => {
    //Update Country count on initial render
    //Call arrow function updateOneCountryCount  that Sends POST request to update count in API on the server
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
            <SaveToggle onChange={handleChange} checked={checked} />
            <a
              id="test"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={dataTooltipContent}
              data-tooltip-place="top"
            >
              {anchorElementText}
            </a>
            <Tooltip id="my-tooltip" anchorSelect="#test" />
            {/* <button
              className="country-detail-back-link"
              style={{
                backgroundColor: day ? "#FAFAFA" : "#202C36",
                color: day ? "black" : "white",
              }}
              // onClick={handleSave}
            >
              {" "}
              Save{" "}
            </button> */}
          </Card>
        </div>
      </main>
    </>
  );
}
