//import Form component
import Form from "../components/Form.jsx";
//Import CountryCard component
import CountryCard from "../components/CountryCard.jsx";
//Import useState and useEffect from react
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
export default function SavedCountries({ countriesData, day }) {
  //Declare an empty array with variable name array
  let array = [];
  //Declare an emptyFormState variable of type object to reset the form data
  const emptyFormState = { fullName: "", email: "", country: "", bio: "" };
  //Declare a formData variable and assign it the value of the emptyFormState variable using useState. Also declare the setter/updater function setFormData
  const [formData, setFormData] = useState(emptyFormState);
  //Declare a variable userFormInfo with an inital value of null using useState and the setter/updater function setUserFormInfo
  const [userFormInfo, setUserFormInfo] = useState(null);
  //Declare an empty array named countryObject (this is an array of objects and will contain all country objects) and correponding setter/updater method using useState
  const [countryObjects, setCountryObjects] = useState([]);

  //Declare an event handler arrow function handleChange to handle changes in form input
  const handleChange = (e) => {
    //this function handles changes in the form input and updates the value of formData with each and every keystroke
    const { name, value } = e.target;
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //Declare an event handler arrow function handleSubmit when user submits form
  const handleSubmit = (event) => {
    //this function handles form submit when the user clicks the submit button
    //prevent default form behavior
    event.preventDefault();
    //update the user's info using the setter function
    setUserFormInfo(formData);
    //print formData on console
    console.log("formData", formData);
    //Send POST request to store form data in API on the server in function addOneUser()
    addOneUser();
    //resets the form to its initial state so it is ready for the next user using the setter method
    setFormData(emptyFormState);
  };

  //Declare an arrow function addOneUser that is asynchronus and sends user data to be stored on the server
  const addOneUser = async () => {
    //Send a POST request to the API with base url and endpoint /add-one-user with headers and body
    const response = await fetch("/api/add-one-user", {
      method: "POST",
      //The content type header tells the server that we are sending JSON data
      headers: {
        "content-type": "application/json ",
      },
      //The request body contains the data to be stored
      body: JSON.stringify({
        name: formData.fullName,
        country_name: formData.country,
        email: formData.email,
        bio: formData.bio,
      }),
    });
    //Guard Clause
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      // Exit early
      return;
    }
    //Convert the response to JSON format using json method
    const responseInJSONFormat = await response.json();
    console.log("response from post method: ", responseInJSONFormat);
  };

  // Declare an asynchronous arrow function getNewestUser to get the latest user that was submitted the form
  const getNewestUser = async () => {
    try {
      //Declare  a variable that will hold response from the GET request to /get-newest-user
      const response = await fetch("/api/get-newest-user");
      //Guard Clause Reference : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        return; // Exit early //Reference : https://dev.to/muthuraja_r/using-guard-clauses-in-asyncawait-a-clean-coding-technique-for-readable-and-maintainable-code-367j
      }
      //Convert the response to JSON format using json method
      const data = await response.json();
      //print on console
      console.log(data);
      //save data in state using the setter function
      setUserFormInfo({
        fullName: data[0].name,
        email: data[0].email,
        country: data[0].country_name,
        bio: data[0].bio,
      });
    } catch (error) {
      //print error on console
      console.log("Error retrieving user data" + error.message);
    }
  };

  //Declare an asynchronous arrow function to get all saved countries from the server
  const getAllSavedCountries = async () => {
    try {
      //Declare  a variable that will hold response from the GET request to /get-all-saved-countries
      const response = await fetch("/api/get-all-saved-countries");
      //Guard Clause
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        // Exit early
        return;
      }
      //Convert the response to JSON format using json() method and save it in a variable named data
      const data = await response.json();
      //print data on console
      console.log("savedCountries data ", data);

      //Use find() method nested inside map() method to get countryobjects
      //  using the saved country names
      array = data
        .map((item) =>
          countriesData.find(
            (country) => country.name.common === item.country_name
          )
        ) //remove country/countries named undefined using filter
        .filter((arrayItem) => arrayItem !== undefined);

      //Check array by printing on console
      console.log(array);
      //add found countries in the countryObjects array using the setter function
      setCountryObjects(array);
    } catch (error) {
      //Print error on console
      console.log("Error retrieving all saved countries" + error.message);
    }
  };

  //Delete all saved countries
  const handleDelete = async () => {
    try {
      //Declare  a variable that will hold response from the POST request to /unsave-all-countries
      const response = await fetch("/api/unsave-all-countries", {
        method: "POST",
        //The content type header tells the server that we are sending JSON data
        headers: {
          "content-type": "application/json ",
        },
      });
      //Guard Clause
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        // Exit early
        return;
      }
      //Convert the response to JSON format using json() method and save it in a variable named data
      const data = await response.json();
      //print data on console
      console.log("Deleted saved countries data ", data);

      setCountryObjects(array);
    } catch (error) {
      //Print error on console
      console.log("Error deleting all saved countries" + error.message);
    }
  };

  useEffect(() => {
    //Call function getAllSavedCountries() to retrieve all the saved countries from the server
    getAllSavedCountries();
    //Call function getNewestUser() to retrieve newest user from the server
    getNewestUser();
  }, []);

  return (
    <>
      <main>
        <h1>
          {userFormInfo === null
            ? "My Saved Countries "
            : `Welcome ${userFormInfo.fullName}!`}
        </h1>
        <button onClick={handleDelete}>
          {" "}
          <MdDelete /> Delete All Saved Countries
        </button>
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
