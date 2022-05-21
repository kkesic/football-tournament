import React from 'react';
import "../style/Pocetna.css";
import prvaslika from "./../slike/Football-Tournaments.jpg";
import {Link} from "react-router-dom";

export const Pocetna: React.FC = () => {

    return (
        <div className="pocetna">
            <h1> FOOTBALL TOURNAMENT </h1>
            <div> <img src={prvaslika}/> </div>
            <Link to="/unos-timova">
                <button className="button-start"> START </button>
            </Link>
        </div>
    )
}