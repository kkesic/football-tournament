import React from 'react';
import "../style/UnosTimova.css"
import {Link} from "react-router-dom";

export const UnosTimova: React.FC = () => {
    return (
        <div className="unos-timova">
            <h2> Unesi osam timova: </h2>
            <div>
                <input/> <br/>
                <input/> <br/>
                <input/> <br/>
                <input/> <br/>
                <input/> <br/>
                <input/> <br/>
                <input/> <br/>
                <input/> <br/>
                <input/> <br/>
            </div>
            <div>
                <Link to="/rezultat-zdrijeba">
                    <button className="button-zdrijeb"> ŽDRIJEB </button>
                </Link>
            </div>
        </div>
    )
}