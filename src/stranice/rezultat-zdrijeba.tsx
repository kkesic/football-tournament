import React from 'react';
import "../style/RezultatZdrijeba.css"
import {Link} from "react-router-dom";

export const RezultatZdrijeba: React.FC = () => {
    const Tim1=localStorage.getItem("Tim1");

    return (
        <div>
        <div className="RezultatZdrijeba">
            <h2> Rezultat ždrijeba: </h2>

        <div className="lijevatablicaA">
            <div className="centar">
            <table>
                <tr>
                    <th> </th>
                    <th>Skupina A</th>
                </tr>
                <tr>
                    <td>1. </td>
                    <td>Tim1</td>
                </tr>
                <tr>
                    <td>2. </td>
                    <td>Tim2</td>
                </tr>
                <tr>
                    <td>3. </td>
                    <td>Tim3</td>
                </tr>
                <tr>
                    <td>4. </td>
                    <td>Tim4</td>
                </tr>
            </table>
            </div>
        </div>

            <div className="desnatablicaB">
                <div className="centar">
                <table>
                    <tr>
                        <th> </th>
                        <th>Skupina B</th>
                    </tr>
                    <tr>
                        <td>1. </td>
                        <td>Tim5</td>
                    </tr>
                    <tr>
                        <td>2. </td>
                        <td>Tim6</td>
                    </tr>
                    <tr>
                        <td>3. </td>
                        <td>Tim7</td>
                    </tr>
                    <tr>
                        <td>4. </td>
                        <td>Tim8</td>
                    </tr>
                </table>
                </div>
            </div>

            <button className="button-krenimo"> Krenimo s utakmicama </button>
        </div>
        </div>
    )
}