import React from 'react';
import Chart from 'react-apexcharts';
import './../App.css';
const LineChart = () => {
  const options = {
    annotations: {},
    chart: {
      animations: {
        enabled: false,
        easing: 'linear',
        speed: 50,
      },
      animateGradually: {
        enabled: false,
      },
      background: '',
      foreColor: '#333',
      height: 1000,
      id: 'WzDd9',
      stackOnlyBar: true,
      toolbar: {
        offsetX: 9,
        offsetY: 3,
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
      },
      },
    },
    plotOptions: {
      line: {
        isSlopeChart: false
      },
      bar: {
        borderRadius: 10,
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
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: 9,
        fontWeight: 500
      }
    },
    grid: {
      padding: {
        right: 5,
        left: 10,
        bottom: 0
      }
    },
    legend: {
        floating: false,
        position: 'bottom',
        fontSize: 14,
        offsetX: 0,
        offsetY: 0,
        markers: {
          shape: 'square',
          size: 10
        },
        itemMargin: {
          vertical: 3.5
        }
      },
    markers: {
      hover: {
        size: 0,
        sizeOffset: 6
      }
    },
    stroke: {
      curve: 'straight',
      width: 3,
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
      hideEmptySeries: false
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {}
      },
      tooltip: {
        enabled: false
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
      tickAmount: 3,
      tickPlacement: 'on',
      title: {
        text: 'Rok',
        style: {
          fontWeight: 700
        }
      }
    },
    yaxis: {
      tickAmount: 12,
      max: 270000,
      min: 0,
      labels: {

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
      text: '2. Liczba studentów z podziałem na kierunki studiów w latach 2018-2022',
      floating: true,
      offsetY: -8,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  };

  const series = [
    {
        name: 'edukacja',
        data: [
            { x: '2018', y: '54928' },
            { x: '2019', y: '49844' },
            { x: '2020', y: '47629' },
            { x: '2021', y: '44981' },
            { x: '2022', y: '41433' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 0,
        color: '#000000' 
    },
    {
        name: 'indywidualne studia międzyobszarowe',
        data: [
            { x: '2018', y: '2027' },
            { x: '2019', y: '21537' },
            { x: '2020', y: '18867' },
            { x: '2021', y: '15267' },
            { x: '2022', y: '15126' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 1,
        color: '#e79f01'
    },
    {
        name: 'nauki przyrodnicze, matematyka i statystyka',
        data: [
            { x: '2018', y: '47182' },
            { x: '2019', y: '44621' },
            { x: '2020', y: '43575' },
            { x: '2021', y: '41551' },
            { x: '2022', y: '40509' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 2,
        color: "#56b5e8"
    },
    {
        name: 'nauki społeczne, dziennikarstwo i informacja',
        data: [
            { x: '2018', y: '101129' },
            { x: '2019', y: '93127' },
            { x: '2020', y: '96166' },
            { x: '2021', y: '92687' },
            { x: '2022', y: '93134' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 3,
        color: "#009f72"
    },
    {
        name: 'prowadzenie działalności gospodarczej, administracja i prawo',
        data: [
            { x: '2018', y: '157821' },
            { x: '2019', y: '150743' },
            { x: '2020', y: '146015' },
            { x: '2021', y: '143604' },
            { x: '2022', y: '139668' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 4,
        color: "#c4b819"
    },
    {
        name: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria',
        data: [
            { x: '2018', y: '23787' },
            { x: '2019', y: '21517' },
            { x: '2020', y: '22156' },
            { x: '2021', y: '21433' },
            { x: '2022', y: '20399' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 5,
        color: "#0073b3"
    },
    {
        name: 'sztuka i przedmioty humanistyczne',
        data: [
            { x: '2018', y: '95519' },
            { x: '2019', y: '91175' },
            { x: '2020', y: '92898' },
            { x: '2021', y: '90415' },
            { x: '2022', y: '89523' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 6,
        color: "#d45e01"
    },
    {
        name: 'technika, przemysł i budownictwo',
        data: [
            { x: '2018', y: '200889' },
            { x: '2019', y: '178890' },
            { x: '2020', y: '171939' },
            { x: '2021', y: '161730' },
            { x: '2022', y: '153326' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 7,
        color: "#cd79a6"
    },
    {
        name: 'technologie informacyjno-komunikacyjne',
        data: [
            { x: '2018', y: '53787' },
            { x: '2019', y: '51010' },
            { x: '2020', y: '51890' },
            { x: '2021', y: '51261' },
            { x: '2022', y: '51202' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 8,
        color: "#999999"
    },
    {
        name: 'usługi',
        data: [
            { x: '2018', y: '55028' },
            { x: '2019', y: '51357' },
            { x: '2020', y: '49007' },
            { x: '2021', y: '45475' },
            { x: '2022', y: '44235' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 9,
        color: "#146a2e"
    },
    {
      name: 'zdrowie i opieka społeczna',
      data: [
          { x: '2018', y: '109419' },
          { x: '2019', y: '108278' },
          { x: '2020', y: '110978' },
          { x: '2021', y: '113834' },
          { x: '2022', y: '114447' }
      ],
      group: 'apexcharts-axis-0',
      zIndex: 10,
      color: "#b001ff"
  }
];

  return (
    <div className="line-chart">
      <Chart options={options} series={series} type="line" height={600} width={600} />
    </div>
  );
};

export default LineChart;
