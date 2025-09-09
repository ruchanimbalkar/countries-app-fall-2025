//import styles
import './CountryCard.css';
//import Link from react-router-dom 
import { Link } from 'react-router-dom';
import Card from "../components/Card.jsx";
export default function CountryCard({country}){

    return (<> 
        {/* Return country card with official name, population, region and capital */}     
        <Link to={`/country/${country.name.common}`}>
            <div className="country-card">
                <Card country={country}/>
            </div>
        </Link>
    </>);
}

