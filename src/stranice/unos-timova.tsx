import React, {useState} from 'react';
import "../style/UnosTimova.css"
import {Link, useNavigate} from "react-router-dom";

export const UnosTimova: React.FC = () => {
    const [Tim1, setTim1]=useState<string>("");
    const [Tim2, setTim2]=useState<string>("");
    const [Tim3, setTim3]=useState<string>("");
    const [Tim4, setTim4]=useState<string>("");
    const [Tim5, setTim5]=useState<string>("");
    const [Tim6, setTim6]=useState<string>("");
    const [Tim7, setTim7]=useState<string>("");
    const [Tim8, setTim8]=useState<string>("");
    const navigate = useNavigate();

    const SpremiTimove = () => {
        const zdrijeb=[Tim1, Tim2, Tim3, Tim4, Tim5, Tim6, Tim7, Tim8];
        const shuffledzdrijeb = zdrijeb.sort(() => 0.5 - Math.random());
        const skupinaA=[];
        const skupinaB=[];
        for (let i=0; i<zdrijeb.length; i++) {
            const kuglica=shuffledzdrijeb[i];
            if (i%2==0) {
                skupinaA.push(kuglica)
            } else {
                skupinaB.push(kuglica)
            }
        }
        localStorage.setItem("skupinaA", JSON.stringify(skupinaA));
        localStorage.setItem("skupinaB", JSON.stringify(skupinaB));
        navigate("/rezultat-zdrijeba")
    }



    return (
        <div className="unos-timova">
            <h2> Unesi osam timova: </h2>
            <div>
                <input value={Tim1} onChange={(e) => setTim1(e.target.value)}/> <br/>
                <input value={Tim2} onChange={(e) => setTim2(e.target.value)}/> <br/>
                <input value={Tim3} onChange={(e) => setTim3(e.target.value)}/> <br/>
                <input value={Tim4} onChange={(e) => setTim4(e.target.value)}/> <br/>
                <input value={Tim5} onChange={(e) => setTim5(e.target.value)}/> <br/>
                <input value={Tim6} onChange={(e) => setTim6(e.target.value)}/> <br/>
                <input value={Tim7} onChange={(e) => setTim7(e.target.value)}/> <br/>
                <input value={Tim8} onChange={(e) => setTim8(e.target.value)}/> <br/>
            </div>
            <div>
                    <button onClick={SpremiTimove} className="button-zdrijeb"> ŽDRIJEB </button>
            </div>
        </div>
    )
}