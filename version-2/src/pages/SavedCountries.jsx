//import Form component
import Form from "../components/Form.jsx";
//Import Card component
import CountryCard from "../components/CountryCard.jsx";
import { useState, useEffect } from "react";
export default function SavedCountries({ countriesData, day }) {
  //console.log("Saved Countries");
  const emptyFormState = { fullName: "", email: "", country: "", bio: "" };
  const [formData, setFormData] = useState(emptyFormState);
  const [userFormInfo, setUserFormInfo] = useState(null);
  //Declare an empty array named countryObject (this is an array of objects and will contain all country objects)
  const [countryObjects, setCountryObjects] = useState([]);
  let foundCountry = null;
  let array = [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checked = e.target.checked;
    console.log(name, value, checked);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // update the user's info in state
    setUserFormInfo(formData);
    console.log("formData", formData);
    setFormData(emptyFormState);
    // Use JSON.stringify() to convert the object into a string before storing it.
    let userFormData = JSON.stringify(formData);
    //Save user data in local storage
    localStorage.setItem("userInfo", userFormData);
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      //if condition is true
      // get the original form object back.
      // Use localStorage.getItem() and JSON.parse() to get the original object back
      let profileDestringified = JSON.parse(localStorage.getItem("userInfo"));
      setUserFormInfo(profileDestringified);
      console.log("userFormInfo : ", userFormInfo);
    }

    //Check if there is a savedCountry in localStorage
    if (localStorage.getItem("savedCountries")) {
      //declared a variable named 'delimiter' and assign it a comma
      // let delimiter = ",";
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
        //add found countries in the countryObjects array
        if (!array.includes(foundCountry)) {
          // array.push(foundCountry);
          array = [...array, foundCountry];
        }
      }
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
