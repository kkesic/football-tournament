import React from 'react';
import "../style/RezultatZdrijeba.css"
import {Link, useNavigate} from "react-router-dom";
import {Rezultat} from "../interfaces";

export const RezultatZdrijeba: React.FC = () => {
    // @ts-ignore
    const lijevatablicaA= JSON.parse (localStorage.getItem("skupinaA")) as string[];
    // @ts-ignore
    const desnatablicaB= JSON.parse (localStorage.getItem("skupinaB")) as string[];
    const navigate = useNavigate();

    const shuffle = (array: Rezultat[]) => {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const kreirajUtakmice = (ekipe: string[]): Rezultat[] => {
        const konacniRezultat: Rezultat[] = []
        for(let i = 0; i < ekipe.length; i++) {
            const tim1 = ekipe[i];
            for(let j = i + 1; j < ekipe.length; j++) {
                const tim2 = ekipe[j];
                konacniRezultat.push({
                    tim1, tim2, ishod: "-"
                });
            }
        }

        return shuffle(konacniRezultat);
    }


    const Idinatablicu = () => {
        const utakmiceZaTablicuA = kreirajUtakmice(lijevatablicaA);
        const utakmiceZaTablicuB = kreirajUtakmice(desnatablicaB);
        localStorage.setItem("utakmiceZaTablicuA", JSON.stringify(utakmiceZaTablicuA));
        localStorage.setItem("utakmiceZaTablicuB", JSON.stringify(utakmiceZaTablicuB));
        navigate("/tablica-rezultati");
    }


    return (
        <div className="RezultatZdrijeba">
            <h2> Rezultat ždrijeba: </h2>

        <div className="lijevatablicaA">
            <table>
                <thead>
                <tr>
                    <th> </th>
                    <th>Skupina A</th>
                </tr>
                </thead>

                <tbody>
                {
                    lijevatablicaA.map((Tim,index) => {
                        return (
                            <tr key={"lijeva"+index}>
                                <td> {index+1}. </td>
                                <td> {Tim} </td>
                            </tr>
                        )
                    } )
                }
                </tbody>
            </table>
            </div>

            <div className="desnatablicaB">
                <table>
                    <thead>
                    <tr>
                        <th> </th>
                        <th>Skupina B</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        desnatablicaB.map((Tim,index) => {
                            return (
                                <tr key={"desna"+index}>
                                    <td> {index+1}. </td>
                                    <td> {Tim} </td>
                                </tr>
                            )
                        } )
                    }
                    </tbody>
                </table>
            </div>

            <button onClick={Idinatablicu} className="button-krenimo"> Krenimo s utakmicama </button>
        </div>
    )
}