import { useState, useEffect } from "react";
//import CountryCard component
import CountryCard from "../components/CountryCard.jsx";
import { MdFilterAlt } from "react-icons/md";
//import symbols for sorting
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
export default function Home({ countriesData, day }) {
  //Declare an empty state variable named countriesInfo and initilize it to prop value countriesData
  const [countriesInfo, setCountriesInfo] = useState(countriesData);
  //Declare an empty state variable named url and initilize it to the default url value
  const [url, setUrl] = useState(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
  );
  // const [searchCountry, setSearchCountry] = useState("");
  //Declare an emptyFormState variable of type object to reset the form data
  const emptyFormState = { searchTerm: "" };
  //Get the heart symbol and convert to string
  let searchIcon = String.fromCodePoint(0x1f50d);
  //Declare a formData variable and assign it the value of the emptyFormState variable using useState. Also declare the setter/updater function setFormData
  const [formData, setFormData] = useState(emptyFormState);
  //console.log("Home day", day);
  const [showCountries, setShowCountries] = useState(true);
  // //Declare a variable named region and assign it the value of empty string using useState.Also declare the setter/updater function setRegion
  // const [region, setRegion] = useState("");
  const [sortByPopulationDESC, setSortByPopulationDESC] = useState(false);
  const [sortByPopulationASC, setSortByPopulationASC] = useState(false);

  //Declare an event handler arrow function handleChange to handle changes in form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //Declare an event handler arrow function handleSearchSubmit to show user entered Country
  const handleSearchSubmit = (event) => {
    //prevent default form behavior
    event.preventDefault();
    console.log("searchTerm", formData.searchTerm);
    //set new url using search term
    setUrl(
      `https://restcountries.com/v3.1/name/${formData.searchTerm}?fullText=true`
    );
    //reset the form to its initial state so it is ready for the next search
    setFormData(emptyFormState);
  };

  //Declare an event handler arrow function handleSortSubmit to sort population in descending order
  const handleSortDescSubmit = () => {
    console.log("inside sort desc. submit");
    //set sort by poulation descending to true
    setSortByPopulationDESC(true);
    //set url
    setUrl(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
    );
  };

  //Declare an event handler arrow function handleSortSubmit to sort population in ascending order
  const handleSortAscSubmit = () => {
    console.log("inside sort asc. submit");
    //set sort by poulation descending to true
    setSortByPopulationASC(true);
    //set url
    setUrl(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
    );
  };

  //Declare an asynchronous arrow function to make a GET request to the API server
  const getCountriesDataAsyncAwait = async () => {
    try {
      //Fetch data from API and wait for it to finish.Save the value returned by the api call in a variable named 'response'.
      const response = await fetch(url); //Getting data from API takes time so we use the await keyword
      //Guard Clause Reference : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        setShowCountries(false);
        return; // Exit early //Reference : https://dev.to/muthuraja_r/using-guard-clauses-in-asyncawait-a-clean-coding-technique-for-readable-and-maintainable-code-367j
      }
      //convert response into JSON notation wait for this line ' await response.json();' to finish before we move to next line
      const data = await response.json();
      //print data on console
      console.log("data ", data);

      //Sort countries by name in alphabetical order(ascending) if length of data greater than 1 (more than one country)
      if (data.length > 1) {
        //Sort Countries in alphabetical order
        //Reference : https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      }

      //if sort by population descending is true
      if (sortByPopulationDESC) {
        //Reference : https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
        data.sort((a, b) => parseInt(b.population) - parseInt(a.population));
      }

      //if sort by population ascending is true
      if (sortByPopulationASC) {
        //Reference : https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
        data.sort((a, b) => parseInt(a.population) - parseInt(b.population));
      }

      //Set country data using the setter/updater function setcountriesInfo and passing on data
      setCountriesInfo(data);
    } catch (error) {
      console.log("Error Fetching API: " + error);
      setShowCountries(false);
    }
  };

  //useEffect to fetch data by making an API call for Countries depending on the url
  useEffect(() => {
    //get filtered/sorted data from API
    getCountriesDataAsyncAwait();
  }, [url]);

  return (
    <>
      <main>
        <div className="home-forms">
          <form onSubmit={handleSearchSubmit}>
            <input
              placeholder={`${searchIcon} Search for a country...`}
              type="text"
              name="searchTerm"
              onChange={handleChange}
            />
          </form>

          <button className="sort-button" onClick={handleSortDescSubmit}>
            {" "}
            <FaSortAmountDown /> Sort by Population{" "}
          </button>

          <button className="sort-button" onClick={handleSortAscSubmit}>
            {" "}
            <FaSortAmountUpAlt />
            Sort by Population{" "}
          </button>

          <form className="sort-form">
            <label>
              {" "}
              <MdFilterAlt />{" "}
            </label>
            <select
              name="continents"
              defaultValue="Filter by Data"
              onChange={(e) =>
                setUrl(
                  `https://restcountries.com/v3.1/region/${e.target.value}`
                )
              }
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="americas">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="parent">
          {/* map over countriesData and render using component CountryCard */}
          {showCountries ? (
            countriesInfo.map((item, index) => (
              <CountryCard country={item} key={"country_" + index} day={day} />
            ))
          ) : (
            <h2> Sorry country not found! </h2>
          )}
        </div>
      </main>
    </>
  );
}
