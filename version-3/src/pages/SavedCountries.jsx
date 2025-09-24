//import Form component
import Form from "../components/Form.jsx";
//Import CountryCard component
import CountryCard from "../components/CountryCard.jsx";
//Import useState and useEffect from react
import { useState, useEffect } from "react";
export default function SavedCountries({ countriesData, day }) {
  //console.log("Saved Countries");
  //Declare an emptyFormState variable of type object to reset the form data
  const emptyFormState = { fullName: "", email: "", country: "", bio: "" };
  //Declare a formData variable and assign it the value of the emptyFormState variable using useState. Also declare the setter/updater function setFormData
  const [formData, setFormData] = useState(emptyFormState);
  //Declare a variable userFormInfo with an inital value of null using useState and the setter/updater function setUserFormInfo
  const [userFormInfo, setUserFormInfo] = useState(null);
  //Declare an empty array named countryObject (this is an array of objects and will contain all country objects)
  const [countryObjects, setCountryObjects] = useState([]);
  //Declare a variable named foundCountry and assign it to null value
  let foundCountry = null;
  //Declare an empty array with variable name array
  let array = [];

  //Declare an arrow function handleChange to handle changes in form input
  const handleChange = (e) => {
    //this function's job is to update the value of formData with each and every keystroke
    const { name, value } = e.target;
    const checked = e.target.checked;
    console.log(name, value, checked);
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    //prevent default form behavior
    event.preventDefault();
    // update the user's info using the setter function
    setUserFormInfo(formData);
    console.log("formData", formData);
    //resets   the form to its initial state so it is ready for the next user
    setFormData(emptyFormState);
    // Use JSON.stringify() to convert the object into a string before storing it.
    let userFormData = JSON.stringify(formData);
    //Save user data in local storage
    localStorage.setItem("userInfo", userFormData);
    //Version -3 Send POST request to give form data to API
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      //if condition is true
      // get the original form object back.
      // Use localStorage.getItem() and JSON.parse() to get the original object back
      let profileDestringified = JSON.parse(localStorage.getItem("userInfo"));
      //set userFormInfo using the setter function
      setUserFormInfo(profileDestringified);
      console.log("userFormInfo : ", userFormInfo);
    }

    //Check if there is a savedCountry in localStorage
    if (localStorage.getItem("savedCountries")) {
      //Get savedCountries from localStorage using the key
      let countryNamesInString = localStorage.getItem("savedCountries");
      console.log("countryNamesInString", countryNamesInString);
      //convert savedCountries to array using JSON parse
      let countryNamesArray = JSON.parse(countryNamesInString) || "[]";
      console.log("Line 53 countryNamesArray : ", countryNamesArray);
      // Use a for of loop to loop over the countryNamesArray and get countries
      for (let countryName of countryNamesArray) {
        console.log(
          "countryName ",
          countryName,
          "typeof countryName ",
          typeof countryName
        );
        foundCountry = countriesData.find(
          (country) => country.name.common === countryName
        );
        console.log("foundCountry : ", foundCountry);
        //only add the country if it is not  already present in array
        if (!array.includes(foundCountry)) {
          // add the foundCountry object in array using spread syntax
          array = [...array, foundCountry];
        }
      }
      //add found countries in the countryObjects array
      setCountryObjects(array);
    }
  }, []);

  return (
    <>
      <main>
        <h1>
          {userFormInfo === null
            ? "My Saved Countries "
            : `Welcome ${userFormInfo.fullName}!`}
        </h1>
        <div className="saved-countries-card">
          {/* //using && operator map over the countryObjects array and render the countryObject using the CountryCard component */}
          {countryObjects &&
            countryObjects.map((savedCountry, index) => (
              <CountryCard
                country={savedCountry}
                key={"country_" + index}
                day={day}
              />
            ))}
        </div>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          formData={formData}
        />
      </main>
    </>
  );
}
