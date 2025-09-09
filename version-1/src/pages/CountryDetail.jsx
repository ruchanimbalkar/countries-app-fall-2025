//import useParams and use it to access the URL parameter called countryName
import { useParams } from "react-router-dom";
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
    console.log("countryObject : ", countryObject);
    let countryCapital = ( countryObject.capital.length !== 0 ) ? ( <>  <b> Capital : </b> {countryObject.capital} </> ) : "";
    return (<> 
        <div className="country-detail">
            <img src={countryObject.flags.png} alt={countryObject.flags.alt}/>
            <div>
                <h2> {countryName} </h2>
                <p> <b> Population : </b>  {countryObject.population} </p>
                <p> <b> Region : </b> {countryObject.region}  </p>
                <p> {countryCapital} </p>
            </div>    
        </div>
    </>);

}