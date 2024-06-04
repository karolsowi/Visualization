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
        <h2>Opis projektu</h2>
        <p>Jest to projekt stworzony w ramach zajęć Wizualizacja danych w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie dla kierunku Informatyka.</p>
        <p>Projekt przedstawia dane na temat liczby studentów oraz absolwentów różnych kierunków studiów na uczelniach wyższych w Polsce na przestrzeni lat 2018-2022.</p>
        <p>Dane wykorzystane w projekcie zostały pobrane z Banku Danych Lokalnych prowadzonego przez Główny Urząd Statystyczny.</p>
        <p>Do wszystkich wykresów została wykorzystana paleta kolorów stworzona na podstawie palety Okabe-Ito, która została specjalnie skomponowana z myślą o osobach z różnymi formami daltonizmu.</p>
        <h2>Cel projektu</h2>
        <p>Celem projektu jest zbadanie trendów w wyborze kierunków studiów na przestrzeni lat, takich jak które kierunki studiów zyskały na popularności, a które straciły.</p>
        <h2>Opisy wykresów</h2>
        <h3>1. Liczba absolwentów z podziałem na kierunki studiów w latach 2018-2022</h3>
        <p></p>
        <h3>2. Liczba studentów z podziałem na kierunki studiów w latach 2018-2022</h3>
        <p>Wykres pokazuje różnice w ilości studentów na poszczególnych kierunkach studiów oraz ich zmiany na przestrzeni lat. Można m.in. zauważyć, że najpopularniejszą grupą kierunków jest technika, przemysł i budownictwo, ale z biegiem lat ilość studentów na tych kierunkach stopniowo spada.</p>
        <h3>3. Średnia liczba studentów zpodziałem na płeć i kierunek studiów w latach 2018-2022</h3>
        <p>Ten wykres porównuje trendy w wyborze kierunku studiów przez kobiety oraz mężczyzn korzystając ze średniej liczby studentów danych grup kierunków z lat 2018-2022. Z wykresu wynika, że najwięcej kobiet wybiera kierunki związane z prowadzeniem działalności gospodarczej, administracją i prawem, natomiast najwięcej mężczyzn studiuje na kierunkach z grupy techniki, przemysłu i budownictwa. Najbardziej wyrównaną grupą pod względem płci studentów są usługi.</p>
      </div>
    </div>
  );
};

export default Opis;
