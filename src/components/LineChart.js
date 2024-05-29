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
      height: 525,
      id: 'WzDd9',
      stackOnlyBar: true,
      toolbar: {
        show: false
      },
      width: 827
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
        fontSize: 9,
        fontWeight: 500
      }
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
      type: 'numeric',
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
      tickAmount: 2,
      title: {
        text: 'Rok',
        style: {
          fontWeight: 700
        }
      }
    },
    yaxis: {
      tickAmount: 7,
      max: 210000,
      min: 0,
      labels: {
        style: {
          colors: [null, null, null, null, null, null, null, null, null, null, null, null]
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
      name: 'Edukacja',
      data: [
        { x: '2018', y: '54928' },
        { x: '2019', y: '49844' },
        { x: '2020', y: '47629' },
        { x: '2021', y: '44981' },
        { x: '2022', y: '41433' }
      ],
      group: 'apexcharts-axis-0',
      zIndex: 0
    },
    {
      name: 'Indywidualne studia międzyobszarowe',
      data: [
        { x: '2018', y: '2027' },
        { x: '2019', y: '21537' },
        { x: '2020', y: '18867' },
        { x: '2021', y: '15267' },
        { x: '2022', y: '15126' }
      ],
      group: 'apexcharts-axis-0',
      zIndex: 1
    },
    // ... (other series data as in the provided file)
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={450} width={600} />
    </div>
  );
};

export default LineChart;
