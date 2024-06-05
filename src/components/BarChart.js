import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './../App.css';

const yearData = {
  2018: {
    women: [
      { x: 'edukacja', y: 6000 },
      { x: 'sztuka i przedmioty humanistyczne', y: 12000 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 18000 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 24000 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 15000 },
      { x: 'technologie informacyjno-komunikacyjne', y: 9000 },
      { x: 'technika, przemysł i budownictwo', y: 27000 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 3000 },
      { x: 'zdrowie i opieka społeczna', y: 21000 },
      { x: 'usługi', y: 9000 },
      { x: 'indywidualne studia międzyobszarowe', y: 3000 }
    ],
    men: [
      { x: 'edukacja', y: 4000 },
      { x: 'sztuka i przedmioty humanistyczne', y: 8000 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 12000 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 16000 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 10000 },
      { x: 'technologie informacyjno-komunikacyjne', y: 6000 },
      { x: 'technika, przemysł i budownictwo', y: 18000 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 2000 },
      { x: 'zdrowie i opieka społeczna', y: 14000 },
      { x: 'usługi', y: 6000 },
      { x: 'indywidualne studia międzyobszarowe', y: 2000 }
    ]
  },
  2019: {
    women: [
      { x: 'edukacja', y: 9000 },
      { x: 'sztuka i przedmioty humanistyczne', y: 15000 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 21000 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 27000 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 16200 },
      { x: 'technologie informacyjno-komunikacyjne', y: 10800 },
      { x: 'technika, przemysł i budownictwo', y: 28200 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 3600 },
      { x: 'zdrowie i opieka społeczna', y: 22200 },
      { x: 'usługi', y: 9600 },
      { x: 'indywidualne studia międzyobszarowe', y: 3600 }
    ],
    men: [
      { x: 'edukacja', y: 6000 },
      { x: 'sztuka i przedmioty humanistyczne', y: 10000 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 14000 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 18000 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 10800 },
      { x: 'technologie informacyjno-komunikacyjne', y: 7200 },
      { x: 'technika, przemysł i budownictwo', y: 18800 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 2400 },
      { x: 'zdrowie i opieka społeczna', y: 14800 },
      { x: 'usługi', y: 6400 },
      { x: 'indywidualne studia międzyobszarowe', y: 2400 }
    ]
  },
  2020: {
    women: [
      { x: 'edukacja', y: 10200 },
      { x: 'sztuka i przedmioty humanistyczne', y: 13200 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 22200 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 27600 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 15600 },
      { x: 'technologie informacyjno-komunikacyjne', y: 11400 },
      { x: 'technika, przemysł i budownictwo', y: 28800 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 4200 },
      { x: 'zdrowie i opieka społeczna', y: 22800 },
      { x: 'usługi', y: 10200 },
      { x: 'indywidualne studia międzyobszarowe', y: 4200 }
    ],
    men: [
      { x: 'edukacja', y: 6800 },
      { x: 'sztuka i przedmioty humanistyczne', y: 8800 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 14800 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 18400 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 10400 },
      { x: 'technologie informacyjno-komunikacyjne', y: 7600 },
      { x: 'technika, przemysł i budownictwo', y: 19200 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 2800 },
      { x: 'zdrowie i opieka społeczna', y: 15200 },
      { x: 'usługi', y: 6800 },
      { x: 'indywidualne studia międzyobszarowe', y: 2800 }
    ]
  },
  2021: {
    women: [
      { x: 'edukacja', y: 9600 },
      { x: 'sztuka i przedmioty humanistyczne', y: 12600 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 21600 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 28200 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 16800 },
      { x: 'technologie informacyjno-komunikacyjne', y: 12000 },
      { x: 'technika, przemysł i budownictwo', y: 29400 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 4800 },
      { x: 'zdrowie i opieka społeczna', y: 23400 },
      { x: 'usługi', y: 10800 },
      { x: 'indywidualne studia międzyobszarowe', y: 4800 }
    ],
    men: [
      { x: 'edukacja', y: 6400 },
      { x: 'sztuka i przedmioty humanistyczne', y: 8400 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 14400 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 18800 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 11200 },
      { x: 'technologie informacyjno-komunikacyjne', y: 8000 },
      { x: 'technika, przemysł i budownictwo', y: 19600 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 3200 },
      { x: 'zdrowie i opieka społeczna', y: 15600 },
      { x: 'usługi', y: 7200 },
      { x: 'indywidualne studia międzyobszarowe', y: 3200 }
    ]
  },
  2022: {
    women: [
      { x: 'edukacja', y: 10800 },
      { x: 'sztuka i przedmioty humanistyczne', y: 13800 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 22800 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 28800 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 17400 },
      { x: 'technologie informacyjno-komunikacyjne', y: 12600 },
      { x: 'technika, przemysł i budownictwo', y: 30000 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 5400 },
      { x: 'zdrowie i opieka społeczna', y: 24000 },
      { x: 'usługi', y: 11400 },
      { x: 'indywidualne studia międzyobszarowe', y: 5400 }
    ],
    men: [
      { x: 'edukacja', y: 7200 },
      { x: 'sztuka i przedmioty humanistyczne', y: 9200 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 15200 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 19200 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 11600 },
      { x: 'technologie informacyjno-komunikacyjne', y: 8400 },
      { x: 'technika, przemysł i budownictwo', y: 20000 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 3600 },
      { x: 'zdrowie i opieka społeczna', y: 16000 },
      { x: 'usługi', y: 7600 },
      { x: 'indywidualne studia międzyobszarowe', y: 3600 }
    ]
  }
};

const sumData = {
  women: [
    { x: 'edukacja', y: 38400 },
    { x: 'sztuka i przedmioty humanistyczne', y: 66600 },
    { x: 'nauki społeczne, dziennikarstwo i informacja', y: 106800 },
    { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 135000 },
    { x: 'nauki przyrodnicze, matematyka i statystyka', y: 81000 },
    { x: 'technologie informacyjno-komunikacyjne', y: 55800 },
    { x: 'technika, przemysł i budownictwo', y: 143400 },
    { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 21000 },
    { x: 'zdrowie i opieka społeczna', y: 113400 },
    { x: 'usługi', y: 52200 },
    { x: 'indywidualne studia międzyobszarowe', y: 21000 }
  ],
  men: [
    { x: 'edukacja', y: 27200 },
    { x: 'sztuka i przedmioty humanistyczne', y: 44400 },
    { x: 'nauki społeczne, dziennikarstwo i informacja', y: 71200 },
    { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 90000 },
    { x: 'nauki przyrodnicze, matematyka i statystyka', y: 56000 },
    { x: 'technologie informacyjno-komunikacyjne', y: 39200 },
    { x: 'technika, przemysł i budownictwo', y: 106800 },
    { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 14000 },
    { x: 'zdrowie i opieka społeczna', y: 80400 },
    { x: 'usługi', y: 35200 },
    { x: 'indywidualne studia międzyobszarowe', y: 14000 }
  ]
};

const baseOptions = {
  annotations: {},
  chart: {
    animations: {
      enabled: true,
      easing: 'linear',
      speed: 5,
    },
    animateGradually: {
      enabled: false,
    },
    dynamicAnimation: { 
      enabled: false,
    },
    foreColor: '#373D3F',
    height: 436,
    id: 'SBq6T',
    stackOnlyBar: true,
    toolbar: {
      show: true
    },
    type: 'bar',
    width: 792
  },
  plotOptions: {
    bar: {
      columnWidth: '63%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      hideZeroBarsWhenGrouped: false,
      isDumbbell: false,
      isFunnel: false,
      isFunnel3d: true,
      dataLabels: {
        total: {
          enabled: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#373d3f',
            fontSize: '12px',
            fontWeight: 600
          }
        }
      }
    },
    bubble: {
      zScaling: true
    },
    treemap: {
      borderRadius: 4,
      dataLabels: {
        format: 'scale'
      }
    },
    radialBar: {
      hollow: {
        background: '#fff'
      },
      dataLabels: {
        name: {},
        value: {},
        total: {}
      },
      barLabels: {
        enabled: false,
        margin: 5,
        useSeriesColors: true,
        fontWeight: 600,
        fontSize: '16px'
      }
    },
    pie: {
      donut: {
        labels: {
          name: {},
          value: {},
          total: {}
        }
      }
    }
  },
  dataLabels: {
    enabled: false,
    style: {
      fontWeight: 700
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    padding: {
      right: 25,
      left: 15
    }
  },
  legend: {
    floating: true,
    position: 'right',
    fontSize: 14,
    offsetX: -2,
    offsetY: 12,
    markers: {
      shape: 'square',
      size: 8
    },
    itemMargin: {
      vertical: 0
    }
  },
  stroke: {
    show: false,
    fill: {
      type: 'solid',
      opacity: 0.85,
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      }
    }
  },
  tooltip: {
    shared: false,
    hideEmptySeries: false,
    intersect: true
  },
  xaxis: {
    labels: {
      rotateAlways: true,
      hideOverlappingLabels: false,
      rotate: -40,
      trim: false,
      style: {
        fontSize: 12
      },
      offsetY: 2
      
    },
    group: {
      groups: [],
      style: {
        colors: [],
        fontSize: '12px',
        fontWeight: 400,
        cssClass: ''
      }
    },
    tickPlacement: 'between',
    title: {
      text: '',
      offsetY: -17,
      style: {
        fontWeight: 700
      }
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 6,
    max: 120000,
    min: 0,
    labels: {
      style: {
        colors: [null, null, null, null, null, null, null]
      }
    },
    title: {
      text: 'Liczba studentów',
      style: {
        fontSize: 12.5,
        fontWeight: 700,
      }
    }
  },
  title: {
    text: '3. Liczba studentów z podziałem na płeć i kierunek studiów w latach 2018-2022',
    floating: true,
    offsetY: -8,
    align: 'center',
    style: {
      color: '#444'
    }
  }
};

const BarChart = () => {
  const [selectedYear, setSelectedYear] = useState('Suma');
  const [chartOptions, setChartOptions] = useState(baseOptions);

  const years = [2018, 2019, 2020, 2021, 2022, 'Suma'];

  const handlePrevious = () => {
    const currentIndex = years.indexOf(selectedYear);
    const previousIndex = (currentIndex - 1 + years.length) % years.length;
    setSelectedYear(years[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = years.indexOf(selectedYear);
    const nextIndex = (currentIndex + 1) % years.length;
    setSelectedYear(years[nextIndex]);
  };

  const getYearData = (year) => {
    if (year === 'Suma') {
      return sumData;
    }
    return yearData[year];
  };

  useEffect(() => {
    const newOptions = { ...baseOptions };
    if (selectedYear === 'Suma') {
      newOptions.yaxis = {
        ...baseOptions.yaxis,
        max: 150000
      };
    } else {
      newOptions.yaxis = {
        ...baseOptions.yaxis,
        max: 30000 // Default max value for individual years
      };
    }
    setChartOptions(newOptions);
  }, [selectedYear]);

  const series = [
    {
      name: 'Kobiety',
      data: getYearData(selectedYear).women.map(item => ({
        x: item.x,
        y: item.y
      })),
      group: 'apexcharts-axis-0',
      zIndex: 0,
      color: '#09c791'
    },
    {
      name: 'Mężczyźni',
      group: 'apexcharts-axis-0',
      data: getYearData(selectedYear).men.map(item => ({
        x: item.x,
        y: item.y
      })),
      zIndex: 1,
      color: '#068fd8'
    }
  ];

  return (
    <div className='bar-chart'>
      <Chart options={chartOptions} series={series} type="bar" height={500} width={1000} />
      <div className="year-selector">
        <button className="arrow-button" onClick={handlePrevious}>◀</button>
        <span className="year-display">{selectedYear}</span>
        <button className="arrow-button-right" onClick={handleNext}>▶</button>
      </div>
    </div>
  );
};

export default BarChart;
