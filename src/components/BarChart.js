import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const options = {
    annotations: {},
    chart: {
      animations: {
        enabled: false,
        easing: 'swing'
      },
      foreColor: '#373D3F',
      height: 436,
      id: 'SBq6T',
      stackOnlyBar: true,
      toolbar: {
        show: false
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
        trim: true,
        style: {
          fontSize: 11
        },
        offsetY: -1
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
        text: 'Kierunek studiów',
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
          fontSize: 12
        }
      }
    }
  };

  const series = [
    {
      name: 'Kobiety',
      data: [
        { x: 'Edukacja', y: '38749' },
        { x: 'Sztuka i przedmioty humanistyczne', y: '64660' },
        { x: 'Nauki społeczne, dziennikarstwo i informacja', y: '62482' },
        { x: 'Prowadzenie działalności gospodarczej, administracja i prawo', y: '93116' },
        { x: 'Nauki przyrodnicze, matematyka i statystyka', y: '27888' },
        { x: 'Technologie informacyjno-komunikacyjne', y: '7848' },
        { x: 'Technika, przemysł i budownictwo', y: '60222' },
        { x: 'Rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: '13289' },
        { x: 'Zdrowie i opieka społeczna', y: '82681' },
        { x: 'Usługi', y: '23795' },
        { x: 'Indywidualne studia międzyobszarowe', y: '8276' }
      ],
      group: 'apexcharts-axis-0',
      zIndex: 0
    },
    {
      name: 'Mężczyźni',
      group: 'apexcharts-axis-0',
      data: [
        { x: 'Edukacja', y: '9014' },
        { x: 'Sztuka i przedmioty humanistyczne', y: '27246' },
        { x: 'Nauki społeczne, dziennikarstwo i informacja', y: '32766' },
        { x: 'Prowadzenie działalności gospodarczej, administracja i prawo', y: '54455' },
        { x: 'Nauki przyrodnicze, matematyka i statystyka', y: '15599' },
        { x: 'Technologie informacyjno-komunikacyjne', y: '43982' },
        { x: 'Technika, przemysł i budownictwo', y: '113132' },
        { x: 'Rolnictwo, leśnictwo, rybołówstwo i weterynaria', y: '8570' },
        { x: 'Zdrowie i opieka społeczna', y: '28710' },
        { x: 'Usługi', y: '25225' },
        { x: 'Indywidualne studia międzyobszarowe', y: '6289' }
      ],
      zIndex: 1
    }
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={500} width={1000} />
    </div>
  );
};

export default BarChart;
