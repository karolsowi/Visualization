import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './../App.css';

const yearData = {
  2018: {
    women: [
      { x: 'edukacja', y: 44606 },
      { x: 'indywidualne studia międzyobszarowe', y: 1245 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 30654 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 67532 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 101086 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 14129 },
      { x: 'sztuka i przedmioty humanistyczne', y: 67692 },
      { x: 'technika, przemysł i budownictwo', y: 71664 },
      { x: 'technologie informacyjno-komunikacyjne', y: 8120 },
      { x: 'usługi', y: 26764 },
      { x: 'zdrowie i opieka społeczna', y: 81520 }
    ],
    men: [
      { x: 'edukacja', y: 10322 },
      { x: 'indywidualne studia międzyobszarowe', y: 782 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 16528 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 33597 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 56735 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 9658 },
      { x: 'sztuka i przedmioty humanistyczne', y: 27827 },
      { x: 'technika, przemysł i budownictwo', y: 129225 },
      { x: 'technologie informacyjno-komunikacyjne', y: 45667 },
      { x: 'usługi', y: 28264 },
      { x: 'zdrowie i opieka społeczna', y: 27899 }
    ]
  },
  2019: {
    women: [
      { x: 'edukacja', y: 40370 },
      { x: 'indywidualne studia międzyobszarowe', y: 12248 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 28943 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 61564 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 95829 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 12525 },
      { x: 'sztuka i przedmioty humanistyczne', y: 64115 },
      { x: 'technika, przemysł i budownictwo', y: 62119 },
      { x: 'technologie informacyjno-komunikacyjne', y: 7565 },
      { x: 'usługi', y: 24671 },
      { x: 'zdrowie i opieka społeczna', y: 80080 }
    ],
    men: [
      { x: 'edukacja', y: 9474 },
      { x: 'indywidualne studia międzyobszarowe', y: 9289 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 15678 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 31563 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 54914 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 8992 },
      { x: 'sztuka i przedmioty humanistyczne', y: 27060 },
      { x: 'technika, przemysł i budownictwo', y: 116771 },
      { x: 'technologie informacyjno-komunikacyjne', y: 43445 },
      { x: 'usługi', y: 26686 },
      { x: 'zdrowie i opieka społeczna', y: 28198 }
    ]
  },
  2020: {
    women: [
      { x: 'edukacja', y: 38532 },
      { x: 'indywidualne studia międzyobszarowe', y: 10815 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 28029 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 63059 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 92364 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 13565 },
      { x: 'sztuka i przedmioty humanistyczne', y: 65121 },
      { x: 'technika, przemysł i budownictwo', y: 59515 },
      { x: 'technologie informacyjno-komunikacyjne', y: 7818 },
      { x: 'usługi', y: 23789 },
      { x: 'zdrowie i opieka społeczna', y: 82060 }
    ],
    men: [
      { x: 'edukacja', y: 9097 },
      { x: 'indywidualne studia międzyobszarowe', y: 8052 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 15546 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 33107 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 53651 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 8591 },
      { x: 'sztuka i przedmioty humanistyczne', y: 27777 },
      { x: 'technika, przemysł i budownictwo', y: 112424 },
      { x: 'technologie informacyjno-komunikacyjne', y: 44072 },
      { x: 'usługi', y: 25218 },
      { x: 'zdrowie i opieka społeczna', y: 28918 }
    ]
  },
  2021: {
    women: [
      { x: 'edukacja', y: 36574 },
      { x: 'indywidualne studia międzyobszarowe', y: 8497 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 26454 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 60305 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 89882 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 13372 },
      { x: 'sztuka i przedmioty humanistyczne', y: 63615 },
      { x: 'technika, przemysł i budownictwo', y: 55450 },
      { x: 'technologie informacyjno-komunikacyjne', y: 7735 },
      { x: 'usługi', y: 22260 },
      { x: 'zdrowie i opieka społeczna', y: 84775 }
    ],
    men: [
      { x: 'edukacja', y: 8407 },
      { x: 'indywidualne studia międzyobszarowe', y: 6770 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 15097 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 32382 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 53722 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 8061 },
      { x: 'sztuka i przedmioty humanistyczne', y: 26800 },
      { x: 'technika, przemysł i budownictwo', y: 106280 },
      { x: 'technologie informacyjno-komunikacyjne', y: 43526 },
      { x: 'usługi', y: 23215 },
      { x: 'zdrowie i opieka społeczna', y: 29059 }
    ]
  },
  2022: {
    women: [
      { x: 'edukacja', y: 33662 },
      { x: 'indywidualne studia międzyobszarowe', y: 8574 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 25361 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 59951 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 86417 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 12853 },
      { x: 'sztuka i przedmioty humanistyczne', y: 62755 },
      { x: 'technika, przemysł i budownictwo', y: 52364 },
      { x: 'technologie informacyjno-komunikacyjne', y: 8002 },
      { x: 'usługi', y: 21491 },
      { x: 'zdrowie i opieka społeczna', y: 84971 }
    ],
    men: [
      { x: 'edukacja', y: 7771 },
      { x: 'indywidualne studia międzyobszarowe', y: 6552 },
      { x: 'nauki przyrodnicze, matematyka i statystyka', y: 15148 },
      { x: 'nauki społeczne, dziennikarstwo i informacja', y: 33183 },
      { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 53251 },
      { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 7546 },
      { x: 'sztuka i przedmioty humanistyczne', y: 26768 },
      { x: 'technika, przemysł i budownictwo', y: 100962 },
      { x: 'technologie informacyjno-komunikacyjne', y: 43200 },
      { x: 'usługi', y: 22744 },
      { x: 'zdrowie i opieka społeczna', y: 29476 }
    ]
  }
};

const sumData = {
  women: [
    { x: 'edukacja', y: 193744 },
    { x: 'indywidualne studia międzyobszarowe', y: 41379 },
    { x: 'nauki przyrodnicze, matematyka i statystyka', y: 139441 },
    { x: 'nauki społeczne, dziennikarstwo i informacja', y: 312411 },
    { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 465578 },
    { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 66444 },
    { x: 'sztuka i przedmioty humanistyczne', y: 323298 },
    { x: 'technika, przemysł i budownictwo', y: 301112 },
    { x: 'technologie informacyjno-komunikacyjne', y: 39240 },
    { x: 'usługi', y: 118975 },
    { x: 'zdrowie i opieka społeczna', y: 413406 }
  ],
  men: [
    { x: 'edukacja', y: 45071 },
    { x: 'indywidualne studia międzyobszarowe', y: 31445 },
    { x: 'nauki przyrodnicze, matematyka i statystyka', y: 77997 },
    { x: 'nauki społeczne, dziennikarstwo i informacja', y: 163832 },
    { x: 'prowadzenie działalności gospodarczej, administracja i prawo', y: 272273 },
    { x: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: 42848 },
    { x: 'sztuka i przedmioty humanistyczne', y: 136232 },
    { x: 'technika, przemysł i budownictwo', y: 565662 },
    { x: 'technologie informacyjno-komunikacyjne', y: 219910 },
    { x: 'usługi', y: 126127 },
    { x: 'zdrowie i opieka społeczna', y: 143550 }
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
