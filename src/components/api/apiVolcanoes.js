import { useState, useEffect } from "react";

// Get volcanoes based on location and pop distance
export function useVolcanoes(country, distance) {
    // Set states to be used for loading, data and error
    const [volcanoLoading, setVolcanoLoading] = useState(true);
    const [volcanoes, setVolcanoes] = useState([]);
    const [volcanoError, setVolcanoError] = useState(null);

    let searchedCountry = country;
    let searchedDistance = distance;

    // Initialize URL
    let URL;

    // Base URL - URL needs to be modified with data and the data needs to be modified before being entered
    const BaseURL = `http://sefdb02.qut.edu.au:3001/volcanoes?country=`;

    let URLWithCountry = BaseURL + encodeURIComponent(country);
    let URLCountryDistance = URLWithCountry + '&populatedWithin=' + encodeURIComponent(distance) + 'km';

    // Check which URL to use based on country and distance selected values
    // If country hasn't been set
    if (country === undefined) {
        // Do nothing
        //If distance hasn't been set
    } else if (distance === '0' || distance === undefined) {
        URL = URLWithCountry;
    } else {
        URL = URLCountryDistance;
    }


    useEffect(
        () => {
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    setVolcanoes(data)
                    console.log(data)
                }).catch((e) => {
                    setVolcanoError(e);
                }).finally(() => {
                    setVolcanoLoading(false);
                })
        },
        [URL]
    )

    return {
        volcanoLoading,
        volcanoes,
        volcanoError
    }
}