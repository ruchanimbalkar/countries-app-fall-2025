//import Form component
import Form from "../components/Form";
import { useState, useEffect } from "react";
export default function SavedCountries({ countriesData }) {
  //console.log("Saved Countries");
  const [userFormInfo, setUserFormInfo] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checked = e.target.checked;
    console.log(name, value, checked);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("formData", formData);
    setFormData({
      fullName: "",
      email: "",
      country: "",
      bio: "",
    });
    // Use JSON.stringify() to convert the object into a string before storing it.
    let userFormData = JSON.stringify(formData);
    //Save user data in local storage
    localStorage.setItem("userInfo", userFormData);
  }

  useEffect(() => {
    // Use localStorage.getItem() and JSON.parse() to get the original object back
    setUserFormInfo(JSON.parse(localStorage.getItem("userInfo")));
    console.log("userFormInfo : ", userFormInfo);
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
