// Import react components and functions
import { useState, useEffect } from "react";

// Get volcanoes based on location and pop distance
export function useVolcanoId(id, jwt) {

    // Set states to be used for loading, data and error
    const [volcanoIdLoading, setVolcanoIdLoading] = useState(true);
    const [volcanoId, setVolcanoId] = useState([]);
    const [volcanoIdError, setVolcanoIdError] = useState(null);



    // URL with relevant directory and id data
    const URL = `http://sefdb02.qut.edu.au:3001/volcano/${id}`;


    // Init headers 
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    // Add auth if exists
    if (jwt != '') {
        headers.append('Authorization', 'Bearer ' + jwt)
    }

    // Call fetch api once
    useEffect(
        () => {
            fetch(URL, {
                method: 'GET',
                headers: headers
            })
                .then((res) => res.json())
                .then((data) => {
                    setVolcanoId(data)
                    console.log(data)
                }).catch((e) => {
                    setVolcanoIdError(e);
                }).finally(() => {
                    setVolcanoIdLoading(false);
                })
        },
        [URL]
    )

    return {
        volcanoIdLoading,
        volcanoId,
        volcanoIdError
    }
}