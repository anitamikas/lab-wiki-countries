import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import myCountries from '../countries.json'

const CountriesList = (props) => {

    // props.match.params is the parts of the URL that *you* named
    // e.g. /education/:PandaPotato
    // console.log("THE params: ", props.match.params)   

    let countryDivs = myCountries.map(eachCountry => {
        return (
            <div key={eachCountry.cca3}>
                <p><Link to={"/countries/" + eachCountry.cca3}>{eachCountry.name.common}</Link></p>
            </div>
            )
    })


    return (
        <div>
            {countryDivs}
        </div>
    )
}

export default CountriesList;