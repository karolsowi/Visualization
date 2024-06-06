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
        <h1>Opis projektu</h1>
        <p>Jest to projekt stworzony w ramach zajęć Wizualizacja danych w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie dla kierunku Informatyka. Projekt przedstawia dane na temat liczby studentów oraz absolwentów różnych kierunków studiów na uczelniach wyższych w Polsce na przestrzeni lat 2018-2022. Dane wykorzystane w projekcie zostały pobrane z Banku Danych Lokalnych prowadzonego przez Główny Urząd Statystyczny.</p>
        <p><strong>Autorzy</strong>: Karol Sowiński, Sara Stec</p>
        
        <h3>Przekrój</h3>
        <p>Polska; grupa kierunków kształcenia wg ISCED-F 2013; podgrupa kierunków kształcenia wg ISCED-F 2013.</p>

        <h3>Definicje pojęć:</h3>
        <p><strong>Student</strong>: osoba kształcąca się na studiach pierwszego lub drugiego stopnia albo jednolitych studiach magisterskich.</p>
        <p><strong>Absolwent studiów</strong>: otrzymuje dyplom ukończenia studiów na określonym kierunku i profilu potwierdzający wykształcenie wyższe oraz tytuł zawodowy: licencjata, inżyniera albo równorzędny - w przypadku studiów pierwszego stopnia; magistra, magistra inżyniera albo równorzędny - w przypadku studiów drugiego stopnia i jednolitych studiów magisterskich.</p>

        <h3>Wyjaśnienia metodologiczne</h3>
        <p>Dane obejmują również cudzoziemców.</p>

        <h3>Źródło danych</h3>
        <p>Zestawy danych z systemów informacyjnych Ministerstwa Edukacji i Nauki; opracowanie wyników badań - Główny Urząd Statystyczny; Urząd Statystyczny w Gdańsku.</p>

        <h3>Paleta kolorów</h3>
        <p>Do wszystkich wykresów została wykorzystana paleta kolorów stworzona na podstawie palety Okabe-Ito, która została specjalnie skomponowana z myślą o osobach z różnymi formami daltonizmu.</p>

        <h2>Cel projektu</h2>
        <p>Celem projektu jest zbadanie trendów w wyborze kierunków studiów na przestrzeni lat, takich jak które kierunki studiów zyskały na popularności, a które straciły.</p>

        <h2>Opisy wykresów</h2>
        <h3>1. Liczba absolwentów z podziałem na kierunki studiów w latach 2018-2022</h3>
        <p> Na wykresie przedstawiony jest stosunek absolwentów do studentów w danym roku. Patrząc na zakres 5-letni, możemy zauważyć jaka część studentów kończy swój kierunek, biorąc jednocześnie pod uwagę, że dane czy ktoś został absolwentem nie odnoszą się do tych samych studentów, lecz sumy z danego roku.</p>

        <h3>2. Liczba studentów z podziałem na kierunki studiów w latach 2018-2022</h3>
        <p>Wykres pokazuje różnice w ilości studentów na poszczególnych kierunkach studiów oraz ich zmiany na przestrzeni lat. Można m.in. zauważyć, że najpopularniejszą grupą kierunków jest technika, przemysł i budownictwo, ale z biegiem lat ilość studentów na tych kierunkach stopniowo spada.</p>

        <h3>3. Średnia liczba studentów z podziałem na płeć i kierunek studiów w latach 2018-2022</h3>
        <p>Ten wykres porównuje trendy w wyborze kierunku studiów przez kobiety oraz mężczyzn korzystając ze średniej liczby studentów danych grup kierunków z lat 2018-2022. Z wykresu wynika, że najwięcej kobiet wybiera kierunki związane z prowadzeniem działalności gospodarczej, administracją i prawem, natomiast najwięcej mężczyzn studiuje na kierunkach z grupy techniki, przemysłu i budownictwa. Najbardziej wyrównaną grupą pod względem płci studentów są usługi.</p>
    </div>
  </div>
  );
};

export default Opis;
