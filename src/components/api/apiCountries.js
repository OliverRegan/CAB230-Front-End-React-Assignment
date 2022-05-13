// Import react components and functions
import { useState, useEffect } from 'react';


// Get countries available from API - to implement drop down choice list for user
export function useCountries() {
    // Set states to be used for loading, data and error
    const [countryLoading, setCountryLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [countryError, setCountryError] = useState(null);

    // Define URL
    const URL = `http://sefdb02.qut.edu.au:3001/countries`;

    // Use effect to prevent code from running multiple times
    // Fetch data from REST api
    useEffect(
        () => {
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {

                    setCountries(data)
                }).catch((e) => {
                    setCountryError(e);
                }).finally(() => {
                    setCountryLoading(false);
                })
        },
        [URL]
    )
    return {
        countryLoading,
        countries,
        countryError
    }

}



