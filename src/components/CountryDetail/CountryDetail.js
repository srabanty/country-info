import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {name} = useParams();
    const [country, setCountry] = useState([]);
    console.log(country);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])
    return (
        <div className="text-center">
            {/* <h3>Hi {code}</h3> */}
            <h2>Country : {country.name}</h2>
            <img src={country.flag} alt=""/>
            <h3>Capital : {country.capital}</h3>
            <h3>Region : {country.region}</h3>
            <p>Population : {country.population}</p>
        </div>
    );
};

export default CountryDetail;