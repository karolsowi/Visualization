import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    annotations: {},
    chart: {
      animations: {
        enabled: false,
        easing: 'swing'
      },
      background: '',
      foreColor: '#333',
      height: 1000,
      id: 'WzDd9',
      stackOnlyBar: true,
      toolbar: {
        show: false
      },
      width: 1000
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
        left: 5,
        bottom: 10
      }
    },
    legend: {
        floating: false,
        position: 'bottom',
        fontSize: 14,
        offsetX: -2,
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
      tickAmount: 15,
      max: 270000,
      min: 0,
      labels: {

      },
      title: {
        text: 'Liczba studentów',
        style: {
          fontSize: 12
        }
      }
    },
    markers: {
      size: 3,
    },
    title: {
      text: '2. Liczba studentów z podziałem na kierunki studiów w latach 2018-2022',
      floating: true,
      offsetY: 0,
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
            { x: '2018', y: '73893' },
            { x: '2019', y: '67015' },
            { x: '2020', y: '63650' },
            { x: '2021', y: '60775' },
            { x: '2022', y: '53114' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 0,
        color: '#000000' 
    },
    {
        name: 'indywidualne studia międzyobszarowe',
        data: [
            { x: '2018', y: '2260' },
            { x: '2019', y: '22219' },
            { x: '2020', y: '22246' },
            { x: '2021', y: '18544' },
            { x: '2022', y: '17905' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 1,
        color: '#e79f01'
    },
    {
        name: 'nauki przyrodnicze, matematyka i statystyka',
        data: [
            { x: '2018', y: '60497' },
            { x: '2019', y: '56987' },
            { x: '2020', y: '55302' },
            { x: '2021', y: '53153' },
            { x: '2022', y: '51443' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 2,
        color: "#56b5e8"
    },
    {
        name: 'nauki społeczne, dziennikarstwo i informacja',
        data: [
            { x: '2018', y: '127634' },
            { x: '2019', y: '118189' },
            { x: '2020', y: '119719' },
            { x: '2021', y: '116144' },
            { x: '2022', y: '115475' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 3,
        color: "#009f72"
    },
    {
        name: 'prowadzenie działalności gospodarczej, administracja i prawo',
        data: [
            { x: '2018', y: '203682' },
            { x: '2019', y: '195498' },
            { x: '2020', y: '187773' },
            { x: '2021', y: '185077' },
            { x: '2022', y: '179073' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 4,
        color: "#c4b819"
    },
    {
        name: 'rolnictwo, leśnictwo, rybołówstwo i weterynaria',
        data: [
            { x: '2018', y: '30001' },
            { x: '2019', y: '27246' },
            { x: '2020', y: '27475' },
            { x: '2021', y: '26535' },
            { x: '2022', y: '25645' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 5,
        color: "#0073b3"
    },
    {
        name: 'sztuka i przedmioty humanistyczne',
        data: [
            { x: '2018', y: '118610' },
            { x: '2019', y: '112530' },
            { x: '2020', y: '113409' },
            { x: '2021', y: '111793' },
            { x: '2022', y: '110255' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 6,
        color: "#d45e01"
    },
    {
        name: 'technika, przemysł i budownictwo',
        data: [
            { x: '2018', y: '263228' },
            { x: '2019', y: '234990' },
            { x: '2020', y: '218816' },
            { x: '2021', y: '206807' },
            { x: '2022', y: '196214' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 7,
        color: "#cd79a6"
    },
    {
        name: 'technologie informacyjno-komunikacyjne',
        data: [
            { x: '2018', y: '64783' },
            { x: '2019', y: '62448' },
            { x: '2020', y: '62361' },
            { x: '2021', y: '62558' },
            { x: '2022', y: '62454' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 8,
        color: "#999999"
    },
    {
        name: 'usługi',
        data: [
            { x: '2018', y: '72393' },
            { x: '2019', y: '67567' },
            { x: '2020', y: '63558' },
            { x: '2021', y: '59190' },
            { x: '2022', y: '57534' }
        ],
        group: 'apexcharts-axis-0',
        zIndex: 9,
        color: "#146a2e"
    },
    {
      name: 'zdrowie i opieka społeczna',
      data: [
          { x: '2018', y: '72393' },
          { x: '2019', y: '67567' },
          { x: '2020', y: '63558' },
          { x: '2021', y: '59190' },
          { x: '2022', y: '57534' }
      ],
      group: 'apexcharts-axis-0',
      zIndex: 10,
      color: "#b001ff"
  }
];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={600} width={500} />
    </div>
  );
};

export default LineChart;
