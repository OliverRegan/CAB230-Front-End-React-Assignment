import { useState } from "react";


import Selector from "./Selector";
import Data from "./Data";
import { useOutletContext } from "react-router-dom";


function Volcanoes(props) {

    const [searchData, setSearchData] = useState([])

    function selectCallback(countryData, distanceData) {
        console.log('callback good' + countryData + distanceData);
        setSearchData([countryData, distanceData])

    }

    const pickVolcanoCallback = useOutletContext()

    return (
        <div>
            <Selector selectCallback={selectCallback} />
            <Data country={searchData[0]} distanceForPop={searchData[1]} idFunc={props.idFunc} />
        </div>
    )
}

export default Volcanoes;