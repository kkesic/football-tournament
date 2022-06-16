import React, {useState} from 'react';
import '../style/TablicaRezultati.css'
import {IshodType, Rezultat} from "../interfaces";
import {UnosRezultata} from "../komponente/unos-rezultata";
import {TablicaBodovi} from "../komponente/tablica-bodovi";

export const TablicaRezultati: React.FC = () => {
    // @ts-ignore
    const utakmiceA = JSON.parse(localStorage.getItem("utakmiceZaTablicuA")) as Rezultat[];
    // @ts-ignore
    const utakmiceB = JSON.parse(localStorage.getItem("utakmiceZaTablicuB")) as Rezultat[];

    const [ishodTablicaA, setIshodTablicaA] = useState<Rezultat[]>(utakmiceA);
    const [ishodTablicaB, setIshodTablicaB] = useState<Rezultat[]>(utakmiceB);

    const [value, setValue] = useState(0);

    const postaviRezultat = (tablica: string, index: number, ishod: IshodType) => {
        if (tablica == "tablicaA") {
            ishodTablicaA[index].ishod = ishod;
            setIshodTablicaA(ishodTablicaA);
        } else {
            ishodTablicaB[index].ishod = ishod;
            setIshodTablicaB(ishodTablicaB);
        }
        setValue(value => value + 1);
    }

    return (
        <div className="tablica-rezultati">
            <div className="tablice">
                <div className="tablicaA">
                    <TablicaBodovi ishodTablice={ishodTablicaA}/>
                </div>
                <div className="tablicaB">
                    <TablicaBodovi ishodTablice={ishodTablicaB}/>
                </div>
            </div>

            <hr/>
            <div className="utakmiceA">
                {utakmiceA.map((utakmica, index) => {
                    return (
                        <div key={"utakmicaA"+index}>
                            <div className="timovi">
                                {utakmica.tim1} - {utakmica.tim2}
                            </div>
                            <div className="rezultat">
                                <UnosRezultata tablica="tablicaA" index={index} postaviRezultat={postaviRezultat}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="utakmiceB">
                {utakmiceB.map((utakmica, index) => {
                    return (
                        <div key={"utakmicaB"+index}>
                            <div className="timovi">
                                {utakmica.tim1} - {utakmica.tim2}
                            </div>
                            <div className="rezultat">
                                <UnosRezultata tablica="tablicaB" index={index} postaviRezultat={postaviRezultat}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}