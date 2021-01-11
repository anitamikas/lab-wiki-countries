import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import myCountries from '../countries.json'

const CountryDetails = (props) => {

    // props.match.params is the parts of the URL that *you* named
    // e.g. /education/:PandaPotato
    // console.log("THE params: ", props.match.params)

    let currentCountry = myCountries.find(e => e.cca3 === props.match.params.cca3)

    let border = currentCountry.borders.map(oneBorder => {
        // oneBorder === FRA
        // 
        let borderingCountry = myCountries.find(e => e.cca3 === oneBorder)

        return (<div>
            <p><Link to={"/countries/" + borderingCountry.cca3}>{borderingCountry.name.common}</Link></p>
            </div>
        )
    })

// let currentBorder = myCountries.find(e => e.cca3 == border[0])

    return (
        <div>
            <h2>{currentCountry.name.common}</h2>
            <p>Capital: {currentCountry.capital}</p>
            <p>Area: {currentCountry.area} km2</p>
            <div>Borders: 
            <p>{border}</p>
           
            </div>
        </div>
    )
}

export default CountryDetails;