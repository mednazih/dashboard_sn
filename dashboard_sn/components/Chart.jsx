import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#EA6A47', '#0091D5'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#EA6A47',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
    background: 'white',
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#EA6A47', '#0091D5'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

// Sample well data
const sampleData = {
  region1: {
    well1: { a: [30, 40, 35, 50, 49, 60, 70, 91, 125], b: [20, 30, 25, 45, 35, 50, 65, 80, 95] },
    well2: { a: [20, 30, 25, 45, 35, 50, 65, 80, 95], b: [15, 25, 20, 40, 30, 45, 60, 75, 90] },
    well3: { a: [10, 20, 15, 35, 25, 40, 55, 70, 85], b: [5, 15, 10, 30, 20, 35, 50, 65, 80] },
  },
};

const getWellData = (data, wellId) => {
  for (const regionId in data) {
    if (data[regionId][wellId]) {
      return data[regionId][wellId];
    }
  }
  return undefined;
};

const wellIds = ['well1', 'well2', 'well3']; // Example well IDs

const Chart = () => {
  const [state, setState] = useState({
    series: [
      { name: 'Product One', data: [] ,fill: 'white',},
      { name: 'Product Two', data: [] ,type: 'line',},
    ],
  });

  const [selectedWellId, setSelectedWellId] = useState(wellIds[0]);

  useEffect(() => {
    const fetchData = async () => {
      // Replace the following line with actual fetch call if needed
      // const response = await fetch('/images/Well_data/data.json');
      // const data = await response.json();
      const data = sampleData; // Using sample data instead of fetching

      const wellData = getWellData(data, selectedWellId);
      if (wellData) {
        setState({
          series: [
            { name: 'Product One', data: wellData.a,fill: 'white' },
            { name: 'Product Two', data: wellData.b,type: 'line' },
          ],
        });
      }
    };

    fetchData();
  }, [selectedWellId]);

  const handleWellChange = (e) => {
    setSelectedWellId(e.target.value);
  };

  return (
    <div className="col-span-12 w-full rounded-sm border border-stroke bg-white px-5 pb-5  shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          {/* pression tete chart */}
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-orange-500    "></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Pression tete</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
              <p className="text-sm font-medium">{selectedWellId}</p>
            </div>
          </div>
          {/* pression pipe chart */}
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center  rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-blue-500 "></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Pression pipe</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          
        </div>
      </div>

      <div>
        <div id="Chart" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="line"
            height={350}
            width={'100%'}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
