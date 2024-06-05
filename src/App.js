import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { Container } from 'reactstrap';
import LineChart from './components/LineChart';
import MultiChart from './components/MultiChart';
import { Routes, Route, Link } from 'react-router-dom';
import Opis from './components/opis';

function Home() {
  return (
    <div>
      <nav>
        <h1>Wizualizacja Danych</h1>
        <Link to="/opis" className="opis-button">Opis</Link>
      </nav>
      <div className="chart-wide">
        <MultiChart />
        <br/>
        <br/>
      </div>
      <div className="wrapper">
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
}

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opis" element={<Opis />} />
      </Routes>
    </Container>
  );
}

export default App;
