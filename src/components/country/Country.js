import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {flag,name} = props.country;
    const countryStyle ={
        border:'1px solid red',
        margin:'20px',
        padding:'20px',
        backgroundColor:'lightblue'
    }
    return (
        <div className="text-center" style={countryStyle}>
            <img src={flag} alt=""/>
            <h1>{name}</h1>
            <p className="text-danger"> <Link to={`/country/${name}`}>Detail of {name}</Link> </p>
            <button className="btn btn-warning"><Link to={`/country/${name}`}>Detail of {name}</Link></button>
        </div>
    );
};

export default Country;