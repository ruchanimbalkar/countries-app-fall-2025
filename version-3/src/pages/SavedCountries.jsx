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
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const addOneUser = async () => {
    const response = await fetch(
      "https://backend-answer-keys.onrender.com/add-one-user",
      {
        method: "POST",
        headers: {
          "content-type": "application/json ",
        },
        body: JSON.stringify({
          name: formData.fullName,
          country_name: formData.country,
          email: formData.email,
          bio: formData.bio,
        }),
      }
    );
    const reply = await response.json();
    console.log("response from post method: ", reply);
  };

  const handleSubmit = (event) => {
    //prevent default form behavior
    event.preventDefault();
    // update the user's info using the setter function
    setUserFormInfo(formData);
    //print formData on console
    console.log("formData", formData);
    //Version -3 Send POST request to store form data in API in function addOneUser()
    addOneUser();
    //resets   the form to its initial state so it is ready for the next user
    setFormData(emptyFormState);
  };

  // get the latest user that has submitted the form
  const getNewestUser = async () => {
    try {
      //Declare  a variable that will hold response from the GET request to /get-newest-user
      const response = await fetch(
        "https://backend-answer-keys.onrender.com/get-newest-user"
      );
      //Convert the response to JSON format
      const data = await response.json();
      //print on console
      console.log(data);
      //save data in state
      setUserFormInfo({
        fullName: data[0].name,
        email: data[0].email,
        country: data[0].country_name,
        bio: data[0].bio,
      });
    } catch (error) {
      console.log("Error retrieving user data" + error.message);
    }
  };

  //get all saved countries
  const getAllSavedCountries = async () => {
    console.log("Inside getAllSavedCountries() function");
    console.log("countriesData", countriesData);
    try {
      //Declare  a variable that will hold response from the GET request to /get-all-saved-countries
      const response = await fetch(
        "https://backend-answer-keys.onrender.com/get-all-saved-countries"
      );
      //Convert the response to JSON format
      const data = await response.json();
      //print on console
      console.log("savedCountries data ", data);

      //Use map and find to get countryobjects using the saved country names
      array = data.map((item) =>
        countriesData.find(
          (country) => country.name.common === item.country_name
        )
      );
      //remove country named undefined
      array = array.filter((arrayItem) => arrayItem !== undefined);
      console.log(array);
      //add found countries in the countryObjects array
      setCountryObjects(array);
    } catch (error) {
      console.log("Error retrieving all saved countries" + error.message);
    }
  };

  useEffect(() => {
    getNewestUser();
    getAllSavedCountries();
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
