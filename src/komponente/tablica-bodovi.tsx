import React from "react";
import {Rezultat, TimRezultat} from "../interfaces";

interface Props {
    ishodTablice: Rezultat[];

}

export const TablicaBodovi: React.FC<Props> = (props) => {
    const prikaziIshodeTablice = () => {
        const timovi: string[] = [];
        for (let i = 0; i < props.ishodTablice.length; i++) {
            timovi.push(props.ishodTablice[i].tim1);
            timovi.push(props.ishodTablice[i].tim2);
        }
        const filterTimovi = timovi.filter((item, pos) => {
            return timovi.indexOf(item) == pos;
        })

        const rezultat: TimRezultat[] = [];

        for (let i = 0; i < filterTimovi.length; i++) {
            const tim = filterTimovi[i];
            const tempRezultat: TimRezultat = {
                bodovi: 0,
                w: 0,
                d: 0,
                l: 0,
                nazivTima: tim,
            };

            for (let j = 0; j < props.ishodTablice.length; j++) {
                const ishodTablice = props.ishodTablice[j];
                if (tim == ishodTablice.tim1) {
                    if (ishodTablice.ishod == "W") {
                        tempRezultat.bodovi += 3;
                        tempRezultat.w++;
                    } else if (ishodTablice.ishod == "D") {
                        tempRezultat.bodovi++;
                        tempRezultat.d++;
                    } else if (ishodTablice.ishod == "L") {
                        tempRezultat.l++;
                    }
                } else if (tim == ishodTablice.tim2) {
                    if (ishodTablice.ishod == "L") {
                        tempRezultat.bodovi += 3;
                        tempRezultat.w++;
                    } else if (ishodTablice.ishod == "D") {
                        tempRezultat.bodovi++;
                        tempRezultat.d++;
                    } else if (ishodTablice.ishod == "W") {
                        tempRezultat.l++;
                    }
                }

            }
            rezultat.push(tempRezultat);
        }

        const poredajPoBodovima = rezultat.sort((rezultatA, rezultatB) => rezultatB.bodovi - rezultatA.bodovi);

        return poredajPoBodovima.map((rezultat, index) => {
            return (
                <tr key={rezultat.nazivTima + index}>
                    <td>{rezultat.nazivTima}</td>
                    <td>{rezultat.w}</td>
                    <td>{rezultat.d}</td>
                    <td>{rezultat.l}</td>
                    <td>{rezultat.bodovi}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Tim</td>
                        <td>W</td>
                        <td>D</td>
                        <td>L</td>
                        <td>Bodovi</td>
                    </tr>
                </thead>
                <tbody>
                    {prikaziIshodeTablice()}
                </tbody>
            </table>
        </div>
    )
}