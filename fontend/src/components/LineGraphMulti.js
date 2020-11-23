import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "./axios";

let Data1, Data2;

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 4,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    display: "none",
    mode: "index",
    intersect: false,
    // callbacks: {
    //   label: function (tooltipItem, data) {
    //     console.log(tooltipItem);
    //     // if (tooltipItem.datasetIndex === 0) {
    //     //   return tooltipItem.value;
    //     // } else {
    //     return tooltipItem.value;
    //     // }
    //   },
    //   title: function (tooltipItem, data) {
    //     console.log(tooltipItem);
    //     if (tooltipItem.datasetIndex === 0) {
    //       return Data1[tooltipItem.index + 1].contestName;
    //     } else {
    //       return Data2[tooltipItem.index + 1].contestName;
    //     }
    //   },
    // },
  },

  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          //   format: "MM/DD/YY",
          //   tooltipFormat: "ll",
        },
        display: false,
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          callback: function (value, index, values) {
            return value;
          },
        },
      },
    ],
  },
};

function LineGraph({ handles }) {
  const [UserRating1, setUserRating1] = useState({});
  const [UserRating2, setUserRating2] = useState({});

  const buildChartData = (data) => {
    const chartData = [];
    let lastDataPoint;
    data.forEach((rating) => {
      if (lastDataPoint) {
        const newDatapoint = {
          x: rating.ratingUpdateTimeSeconds / 31536000,
          y: Math.abs(rating.newRating),
        };
        chartData.push(newDatapoint);
      }
      lastDataPoint = rating.newRating;
    });
    return chartData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const req1 = await axios.get(`/explore/Rating/${handles[0]}`); // axios returns a promise
      const req2 = await axios.get(`/explore/Rating/${handles[1]}`); // axios returns a promise
      const chartData1 = buildChartData(req1.data);
      const chartData2 = buildChartData(req2.data);
      Data1 = req1.data;
      Data2 = req2.data;
      setUserRating1(chartData1);
      setUserRating2(chartData2);
      console.log(chartData1, chartData2);
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: "350px", width: "80%" }}>
      {UserRating1?.length > 0 && UserRating2?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "transparent",
                borderColor: "#CC1034",
                borderJoinStyle: "round",
                borderWidth: 2,
                data: UserRating1,
                pointBackgroundColor: "yellow",
                pointHoverRadius: 5,
              },
              {
                backgroundColor: "transparent",
                borderColor: "#32cc10",
                borderJoinStyle: "round",
                borderWidth: 2,
                data: UserRating2,
                pointBackgroundColor: "orange",
                pointHoverRadius: 5,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
