//import useParams and use it to access the URL parameter called countryName
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
export default function CountryDetail({countries}){
    //get this country's name from the URL parameter
    const countryName = useParams().countryName;
    console.log("Country Detail");
    let leftArrowIcon = String.fromCodePoint(0x2190);
    let countryObject = countries.find((country) => country.name.common === countryName);
 
    //testing: console.log("countryObject : ", countryObject);
    return (<> 
        <a href="/" className="country-detail-back-link" > {leftArrowIcon} Back </a>
        <div className="country-detail">
            <Card country={countryObject}/>
        </div>
    </>);

}