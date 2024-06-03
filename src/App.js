import React from 'react';
import './App.css';
import Chart from "react-apexcharts";
import BarChart from './components/BarChart';
import { MixChart } from './components/MixChart';
import { Alert, Container, Col, Row } from 'reactstrap';
import LineChart from './components/LineChart';
import CandlestickChart from './components/CandleChart';
import MultiChart from './components/MultiChart';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
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
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opis" element={<Opis />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;