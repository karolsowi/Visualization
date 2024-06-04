import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';  

const Opis = () => {
  return (
    <div>
      <nav>
        <h1>Wizualizacja Danych</h1>
        <Link to="/Visualisation" className="opis-button">Wykresy</Link>
      </nav>
      <div className="opis">
        <h3>Opis projektu</h3>
        <p>Jest to projekt stworzony w ramach zajęć Wizualizacja danych w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie dla kierunku Informatyka.</p>
        <p>Projekt przedstawia dane na temat liczby studentów oraz absolwentów różnych kierunków studiów na uczelniach wyższych w Polsce na przestrzeni lat 2018-2022.</p>
        <p>Dane wykorzystane w projekcie zostały pobrane z Banku Danych Lokalnych prowadzonego przez Główny Urząd Statystyczny.</p>
        <h3>Cel projektu</h3>
        <p>Celem projektu jest zbadanie trendów w edukacji i zrozumienie, które kierunki studiów zyskały na popularności, a które straciły.</p>
      </div>
    </div>
  );
};

export default Opis;
