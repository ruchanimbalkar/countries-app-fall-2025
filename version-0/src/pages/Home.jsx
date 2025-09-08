//import CountryCard component
import CountryCard from '../components/CountryCard.jsx';
export default function Home({countriesData}){
    console.log('Home');
    return (<> 
        <main>
            <div className='parent'>
                {/* map over countriesData and render using component CountryCard */}
                {countriesData.map((item, index)=>
                    <CountryCard country={item} key={'country_' + index} />
                )}
            </div>
        </main>
    </>);

}