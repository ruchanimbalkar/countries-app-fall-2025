//import Form component
import Form from "../components/Form";
import { useState, useEffect } from "react";
export default function SavedCountries({ countriesData }) {
  //console.log("Saved Countries");
  const emptyFormState = { fullName: "", email: "", country: "", bio: "" };
  const [userFormInfo, setUserFormInfo] = useState(null);
  const [formData, setFormData] = useState(emptyFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checked = e.target.checked;
    console.log(name, value, checked);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    // update the user's info in state
    setUserFormInfo(formData);
    console.log("formData", formData);
    setFormData(emptyFormState);
    // Use JSON.stringify() to convert the object into a string before storing it.
    let userFormData = JSON.stringify(formData);
    //Save user data in local storage
    localStorage.setItem("userInfo", userFormData);
  }

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      //if condition is true
      // get the original form object back.
      // Use localStorage.getItem() and JSON.parse() to get the original object back
      let profileDestringified = JSON.parse(localStorage.getItem("userInfo"));
      setUserFormInfo(profileDestringified);
      console.log("userFormInfo : ", userFormInfo);
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
        <div className="saved-countries-card"> </div>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          formData={formData}
        />
      </main>
    </>
  );
}
