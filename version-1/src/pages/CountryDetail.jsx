//import useParams and use it to access the URL parameter called countryName
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
export default function CountryDetail({countries}){
    //get this country's name from the URL parameter
    const countryName = useParams().countryName;
    console.log("Country Detail");
    let countryObject = {};
    for (let country of countries) {
        console.log(typeof country);
        if(country.name.common === countryName)
        {
            countryObject = country;       
        }   
    }
    //testing: console.log("countryObject : ", countryObject);
    return (<> 
        <a href="/" className="country-detail-back-link" > Back </a>
        <div className="country-detail">
            <Card country={countryObject}/>
        </div>
    </>);

}