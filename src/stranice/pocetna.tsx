import React from 'react';
import "../style/Pocetna.css";
import prvaslika from "./../slike/Football-Tournaments.jpg";

export const Pocetna: React.FC = () => {
    return (
        <div className="pocetna">
            <h1> FOOTBALL TOURNAMENT </h1>

            <div> <img src={prvaslika}/> </div>

            <button className="button-start">
                START
            </button>

        </div>

    )
}