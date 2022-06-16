import React, {useEffect, useState} from 'react';
import {IshodType} from "../interfaces";

interface Props {
    tablica: string;
    index: number;
    postaviRezultat: (tablica: string, index: number, ishod: IshodType) => void;
}

export const UnosRezultata: React.FC<Props> = (props) => {
    const [rezultatTim1, setRezultatTim1] = useState("");
    const [rezultatTim2, setRezultatTim2] = useState("");

    const provjeriIshod = (): IshodType => {
        if (rezultatTim1 > rezultatTim2) {
            return "W";
        } else if (rezultatTim2 > rezultatTim1) {
            return "L";
        } else {
            return "D";
        }
    }

    useEffect(() => {
        if (rezultatTim1 && rezultatTim2) {
            const ishod = provjeriIshod();
            props.postaviRezultat(props.tablica, props.index, ishod);
        }
    }, [rezultatTim1, rezultatTim2]);

    return (
        <div>
            <input type="number" value={rezultatTim1} onChange={(e) => setRezultatTim1(e.target.value)}/>
            -
            <input type="number" value={rezultatTim2} onChange={(e) => setRezultatTim2(e.target.value)}/>
        </div>
    )
}