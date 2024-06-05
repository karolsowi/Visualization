import React from 'react';
import Chart from 'react-apexcharts';

const data = {
    2018:	[34.53,	11.49,	28.22,	26.21,	29.06,	26.12,	24.17,	31.03,	20.44,	31.56,	23.93],
    2019:	[34.45,	3.17,	27.71,	26.91,	29.69,	26.63,	23.42,	31.36,	22.42,	31.56,	25.51],
    2020:	[33.64,	17.91,	26.91,	24.49,	28.60,	24.01,	22.08,	27.26,	20.18,	29.69,	21.16],
    2021:	[35.11,	21.46,	27.92,	25.31,	28.88,	23.80,	23.64,	27.87,	22.04,	30.16,	21.40],
    2022:	[28.19,	18.37,	26.99,	23.99,	28.21,	25.72,	23.16,	27.97,	21.98,	30.06,	22.21]
};


const series = Object.keys(data).map(year => ({
  name: year,
  data: data[year]
}));

const options = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: false,
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top',
      },
    }
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '8px',
      colors: ["#304758"]
    }
  },
  xaxis: {
    categories: ['edukacja',	'indywidualne studia międzyobszarowe',	'nauki przyrodnicze, matematyka i statystyka',	'nauki społeczne, dziennikarstwo i informacja',	'prowadzenie działalności gospodarczej, administracja i prawo',	'rolnictwo, leśnictwo, rybołówstwo i weterynaria',	'sztuka i przedmioty humanistyczne',	'technika, przemysł i budownictwo',	'technologie informacyjno-komunikacyjne',	'usługi',	'zdrowie i opieka społeczna',
],
    position: 'under',
    labels: {
      rotate: -35,
      offsetY: 5,
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  fill: {
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100, 100]
    },
  },
  yaxis: {
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true,
    },
    labels: {
      
      show: true,
      formatter: function (val) {
        return val;
      }
    }
  },
  title: {
    text: '1. Liczba Absolwentów z Podziałem na Kierunki Studiów w Latach 2018-2022',
    floating: true,
    offsetY: 0,
    align: 'center',
    style: {
      color: '#444'
    }
  },
  legend: {
    floating: true,
    position: 'top',
    fontSize: 14,
    offsetX: 0,
    offsetY: 37,
    markers: {
      shape: 'square',
      size: 8
    },
    itemMargin: {
      vertical: 0
    }
  },
};

const MultiChart = () => {
  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default MultiChart;
