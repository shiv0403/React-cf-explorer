import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "./../axios";
import "./LineGraphSingle.css";

let Data;

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
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        tooltipItem.label = "hi";
        return tooltipItem.value;
      },
      title: function (tooltipItem, data) {
        return Data[tooltipItem[0].index + 1].contestName;
      },
    },
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

function LineGraph({ handle }) {
  const [UserRating, setUserRating] = useState({});

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
      const req = await axios.get(`/explore/Rating/${handle}`); // axios returns a promise
      const chartData = buildChartData(req.data);
      Data = req.data;
      setUserRating(chartData);
    };
    fetchData();
  }, []);

  return (
    <div className="single_graph_int">
      {UserRating?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                borderColor: "#CC1034",
                borderJoinStyle: "round",
                borderWidth: 2,
                data: UserRating,
                pointBackgroundColor: "yellow",
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
