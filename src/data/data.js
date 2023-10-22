import { iconsImgs } from "../utils/images";

export const navigationLinks = [
  { id: 1, title: "Dashboard", image: iconsImgs.dashboard },
  { id: 2, title: "Holdings", image: iconsImgs.holding },
  { id: 3, title: "Performance", image: iconsImgs.performance },
];

export const barChartData = {
  chartData: {
    daily: {
      labels: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ], // For daily data
      datasets: [
        {
          label: "Portfolio",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [2350.67, 2712.45, 2183.89, 2956.12, 2387.56, 2654.23, 2983.76], // Actual data values with decimal places for Portfolio for each day of the week (less than 3000)
          backgroundColor: "#fb5253", // Red color
        },
        {
          label: "Dollar",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [2887.21, 2456.78, 2997.45, 2335.98, 2689.56, 2187.34, 2542.67], // Actual data values with decimal places for Dollar for each day of the week (less than 3000)
          backgroundColor: "#87d1f3", // Sky Blue color
        },
        {
          label: "ETFs",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [2736.45, 2421.89, 2668.34, 2305.76, 2784.12, 2491.67, 2165.23], // Actual data values with decimal places for ETFs for each day of the week (less than 3000)
          backgroundColor: "#0525f7", // Royal Blue color
        },
      ],
    },
    weekly: {
      labels: [
        "Wk 10",
        "Wk 9",
        "Wk 8",
        "Wk 7",
        "Wk 6",
        "Wk 5",
        "Wk 4",
        "Wk 3",
        "Wk 2",
        "Wk 1",
      ], // For 10 weeks data
      datasets: [
        {
          label: "Portfolio",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2350.67, 2712.45, 2183.89, 2956.12, 2387.56, 2654.23, 2983.76,
            2245.91, 2511.34, 2789.22,
          ], // Actual data values with decimal places for Portfolio for 10 weeks (less than 3000)
          backgroundColor: "#fb5253", // Red color
        },
        {
          label: "Dollar",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2887.21, 2456.78, 2997.45, 2335.98, 2689.56, 2187.34, 2542.67,
            2922.11, 2105.89, 2881.67,
          ], // Actual data values with decimal places for Dollar for 10 weeks (less than 3000)
          backgroundColor: "#87d1f3", // Sky Blue color
        },
        {
          label: "ETFs",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2736.45, 2421.89, 2668.34, 2305.76, 2784.12, 2491.67, 2165.23,
            2903.78, 2632.56, 2749.98,
          ], // Actual data values with decimal places for ETFs for 10 weeks (less than 3000)
          backgroundColor: "#0525f7", // Royal Blue color
        },
      ],
    },
    monthly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ], // For monthly data
      datasets: [
        {
          label: "Portfolio",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2500.87, 2634.45, 2756.23, 2812.56, 2654.76, 2712.34, 2667.98,
            2723.76, 2645.22, 2589.45, 2678.89, 2721.56,
          ], // Actual data values with decimal places for Portfolio for each month (less than 3000)
          backgroundColor: "#fb5253", // Red color
        },
        {
          label: "Dollar",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2800.21, 2698.45, 2556.78, 2689.45, 2767.34, 2621.56, 2712.89,
            2654.76, 2589.34, 2634.21, 2712.45, 2634.78,
          ], // Actual data values with decimal places for Dollar for each month (less than 3000)
          backgroundColor: "#87d1f3", // Sky Blue color
        },
        {
          label: "ETFs",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2750.45, 2623.67, 2654.22, 2732.11, 2676.45, 2689.78, 2634.23,
            2598.56, 2667.89, 2701.34, 2698.45, 2667.22,
          ], // Actual data values with decimal places for ETFs for each month (less than 3000)
          backgroundColor: "#0525f7", // Royal Blue color
        },
      ],
    },
    yearly: {
      labels: [
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
      ], // For 10 years data starting from 2023 and going back
      datasets: [
        {
          label: "Portfolio",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2650.87, 2734.45, 2856.23, 2912.56, 2754.76, 2812.34, 2767.98,
            2823.76, 2745.22, 2689.45,
          ], // Actual data values with decimal places for Portfolio for 10 years (less than 3000)
          backgroundColor: "#fb5253", // Red color
        },
        {
          label: "Dollar",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2800.21, 2698.45, 2556.78, 2689.45, 2767.34, 2621.56, 2712.89,
            2654.76, 2589.34, 2634.21,
          ], // Actual data values with decimal places for Dollar for 10 years (less than 3000)
          backgroundColor: "#87d1f3", // Sky Blue color
        },
        {
          label: "ETFs",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [
            2750.45, 2623.67, 2654.22, 2732.11, 2676.45, 2689.78, 2634.23,
            2598.56, 2667.89, 2701.34,
          ], // Actual data values with decimal places for ETFs for 10 years (less than 3000)
          backgroundColor: "#0525f7", // Royal Blue color
        },
      ],
    },
    all: {
      labels: ["Portfolio", "Dollar", "ETFs"],
      datasets: [
        {
          label: "All Averages",
          borderSkipped: false,
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
          data: [2727.91, 2685.52, 2696.44],
          backgroundColor: "rgba(255, 206, 86, 0.7)", // Yellow color
        },
      ],
    },
  },
  performanceData: {
    amount: 9864.34,
    gain: 234.23,
    percentage: 30.34,
  },
};

export const lineChartData = {
  october: {
    chartData: {
      labels: [
        "Oct 1",
        "Oct 2",
        "Oct 3",
        "Oct 4",
        "Oct 5",
        "Oct 6",
        "Oct 7",
        "Oct 8",
        "Oct 9",
        "Oct 10",
        "Oct 11",
        "Oct 12",
        "Oct 13",
        "Oct 14",
        "Oct 15",
        "Oct 16",
        "Oct 17",
        "Oct 18",
        "Oct 19",
        "Oct 20",
        "Oct 21",
        "Oct 22",
        "Oct 23",
        "Oct 24",
        "Oct 25",
        "Oct 26",
        "Oct 27",
        "Oct 28",
        "Oct 29",
        "Oct 30",
        "Oct 31",
      ],
      datasets: [
        {
          label: "October",
          data: [
            8472.45, 8492.78, 8535.12, 8599.23, 8684.56, 8781.91, 8882.36,
            8977.47, 9059.62, 9123.92, 9164.21, 9186.53, 9187.18, 9164.76,
            9119.99, 9058.82, 8989.67, 8919.11, 8853.32, 8800.84, 8769.39,
            8760.23, 8774.93, 8816.12, 8885.65, 8978.21, 9088.93, 9211.75,
            9340.19, 9474.92, 9609.78,
          ],
          borderColor: "#00aaa7",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    performanceData: {
      amount: 9864.34,
      gain: 234.23,
      percentage: 30.34,
    },
  },
  september: {
    chartData: {
      labels: [
        "Sep 1",
        "Sep 2",
        "Sep 3",
        "Sep 4",
        "Sep 5",
        "Sep 6",
        "Sep 7",
        "Sep 8",
        "Sep 9",
        "Sep 10",
        "Sep 11",
        "Sep 12",
        "Sep 13",
        "Sep 14",
        "Sep 15",
        "Sep 16",
        "Sep 17",
        "Sep 18",
        "Sep 19",
        "Sep 20",
        "Sep 21",
        "Sep 22",
        "Sep 23",
        "Sep 24",
        "Sep 25",
        "Sep 26",
        "Sep 27",
        "Sep 28",
        "Sep 29",
        "Sep 30",
      ],
      datasets: [
        {
          label: "September",
          data: [
            7123.54, 6956.21, 7221.89, 7012.45, 7143.32, 7089.17, 7254.87,
            6987.98, 7056.72, 7323.22, 6981.21, 7112.53, 7242.18, 7384.76,
            7451.99, 7573.82, 7642.67, 7758.11, 7812.32, 7980.84, 8032.39,
            8155.23, 8224.93, 8356.12, 8475.65, 8532.21, 8686.93, 8760.75,
            8845.19, 8998.92,
          ],
          borderColor: "#00aaa7",
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
          tension: 0.4,
        },
      ],
    },
    performanceData: {
      amount: 7845.32,
      gain: 143.56,
      percentage: 15.43,
    },
  },
  august: {
    chartData: {
      labels: [
        "Aug 1",
        "Aug 2",
        "Aug 3",
        "Aug 4",
        "Aug 5",
        "Aug 6",
        "Aug 7",
        "Aug 8",
        "Aug 9",
        "Aug 10",
        "Aug 11",
        "Aug 12",
        "Aug 13",
        "Aug 14",
        "Aug 15",
        "Aug 16",
        "Aug 17",
        "Aug 18",
        "Aug 19",
        "Aug 20",
        "Aug 21",
        "Aug 22",
        "Aug 23",
        "Aug 24",
        "Aug 25",
        "Aug 26",
        "Aug 27",
        "Aug 28",
        "Aug 29",
        "Aug 30",
        "Aug 31",
      ],
      datasets: [
        {
          label: "August",
          data: [
            6488.97, 6571.58, 6708.36, 6546.89, 6838.02, 7075.88, 6538.85,
            7131.63, 6264.54, 6843.47, 7184.56, 6653.25, 6978.64, 7214.05,
            6692.76, 7081.53, 6913.36, 6627.54, 6866.76, 7316.64, 6622.34,
            6815.38, 7067.03, 6619.39, 6983.88, 7318.11, 6489.23, 6771.57,
            7104.67, 6735.61,
          ],
          borderColor: "#fb5253",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    performanceData: {
      amount: 7453.45,
      gain: -134.23,
      percentage: -8.34,
    },
  },
};

export const doughnutChartData = {
  labels: [
    "Real Estate",
    "Manufacturing",
    "Fast Food",
    "Tourism",
    "Oil & Gas",
    "Health Insurance",
    "Banking",
  ],
  datasets: [
    {
      label: "Poll",
      data: [3200, 11026, 4253, 2285, 5253, 4629, 2823],
      backgroundColor: [
        "#ffffff",
        "#87d1f3",
        "#00aaa7",
        "#00fe93",
        "#febd2e",
        "#bb6bd9",
        "#fb5253",
      ],
      borderColor: [
        "#ffffff",
        "#87d1f3",
        "#00aaa7",
        "#00fe93",
        "#febd2e",
        "#bb6bd9",
        "#fb5253",
      ],
    },
  ],
};

export const marketData = [
  {
    symbol: {
      logo: iconsImgs.apple,
      title: "AAPL",
    },
    price: 234.0,
    return: 45.43,
    totalNetCost: 1234.0,
    marketValue: 1345.87,
    totalGain: 456.34,
    dailyGain: -3.45,
    portfolio: 13.45,
  },
];
