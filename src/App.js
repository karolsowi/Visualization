import React from 'react';
import './App.css';
import Chart from "react-apexcharts";
import BarChart from './components/BarChart';
import { MixChart } from './components/MixChart';
import { Alert, Container, Col, Row } from 'reactstrap';
import LineChart from './components/LineChart';
import CandlestickChart from './components/CandleChart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <div className="header">
          <h1 className="display-4">Wizualizacja Danych</h1>
          <button className="opis-button" onClick={() => { window.location.href = '/opis'; }}>Opis</button>
        </div>
        <div className="chart-wide">
          <CandlestickChart />
        </div>
        <div className="wrapper">
          <LineChart />
          <BarChart />
        </div>
      </Container>
    </div>
    
  );
}

export default App;
