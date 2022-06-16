import React from 'react';
import './style/App.css';
import {Pocetna} from "./stranice/pocetna";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UnosTimova} from "./stranice/unos-timova";
import {RezultatZdrijeba} from "./stranice/rezultat-zdrijeba";
import {TablicaRezultati} from "./stranice/tablica-rezultati";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Pocetna />}/>
          <Route path="unos-timova" element={<UnosTimova />}/>
          <Route path="rezultat-zdrijeba" element={<RezultatZdrijeba />}/>
          <Route path="tablica-rezultati" element={<TablicaRezultati />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
