//import styles
import './CountryCard.css';
export default function CountryCard({country}){
    //testing : console.log("capital ", country.capital);
    let countryCapital = ( country.capital.length !== 0 ) ? ( <>  <b> Capital : </b> {country.capital} </> ) : "";
    return (<> 
        {/* Return country card with official name, population, region and capital */}
        <div className="country-card">
            <img src={country.flags.png} alt={country.flags.alt}/>
            <div className="country-card-text">
                <h2>{country.name.common}</h2>
                <p> <b> Population : </b> {country.population} </p>
                <p> <b> Region : </b> {country.region}  </p>
                <p> 
                    {countryCapital}
                </p>
            </div>
        </div>
    </>);
}

