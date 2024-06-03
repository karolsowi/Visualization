import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';  

const Opis = () => {
  return (
    <div>
      <nav>
        <h1>Wizualizacja Danych</h1>
        <Link to="/" className="opis-button">Wykresy</Link>
      </nav>
      <div className="opis">
        <p>W tym projekcie przedstawiamy liczbę absolwentów z podziałem na kierunki studiów w latach 2018-2022. Dane są wizualizowane za pomocą wykresów słupkowych, co pozwala na łatwe porównanie zmian w liczbie absolwentów w poszczególnych latach.</p>
        <h2>Cel projektu</h2>
        <p>Celem projektu jest zbadanie trendów w edukacji i zrozumienie, które kierunki studiów zyskały na popularności, a które straciły.</p>
      </div>
    </div>
  );
};

export default Opis;
