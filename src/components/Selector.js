// Import custom functions and Components
import { useCountries } from "./api/apiCountries";

let country, distance;

function Selector(props) {
    // Load all countries for user to choose from
    let { countryLoading, countries, countryError } = useCountries();


    function selectCountryAndDistance() {

        props.selectCallback(country, distance);
    }

    return (
        <div>

            <div className=' container text-center justify-content-center py-3'>
                <h2 className="text-light">Volcano Database</h2>
                <p className='lead text-light w-75 mx-auto'>Input some search criteria to see volcanoes, choose one to see more detailed information. If you register and login there is additional information available.</p>
            </div>

            {countryLoading ? <h3 className="text-light">Loading...</h3> :
                <div className="row m-auto justify-content-center py-1">
                    <select className="col-sm-3 mx-4 rounded bg-dark text-light border-0 my-2" onChange={(e) => { country = e.target.value; selectCountryAndDistance() }}>
                        <option default>Select a Country...</option>
                        {countries.map((country) => (<option value={country} key={country}>{country}</option>))}
                    </select>
                    <select className="col-sm-3 mx-4 rounded bg-dark text-light border-0 my-2" onChange={(e) => { distance = e.target.value; selectCountryAndDistance() }}>
                        <option default value={'0'}>Populated within...</option>
                        <option value={'0'}>Not specified</option>
                        <option value={'5'}>5km</option>
                        <option value={'10'}>10km</option>
                        <option value={'30'}>30km</option>
                        <option value={'100'}>100km</option>
                    </select>
                </div>}

            <hr className='container bg-light '></hr>
        </div>
    )
}

export default Selector;