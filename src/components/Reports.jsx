import React, { useEffect, useState, useRef } from "react";
import axiosInstance from "./Config/axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";
import { Bar, getDatasetAtEvent } from "react-chartjs-2";
import { Router } from "react-router";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [lead, setLead] = useState("");
  const [labelData, setlabelData] = useState("");
  const chartRef = useRef();
  console.log("labelData", labelData);
  const navigate = useNavigate();

  useEffect(() => {
    const getLeads = async () => {
      const response = await axiosInstance.get("/lead-source");
      console.log("Response1234", response?.data);
      const rescon = await response?.data;
      setLead(await rescon);
    };
    getLeads();
  }, []);

  const data = {
    type: "bar",
    labels: lead
      ? lead.map((data) => {
          return data.lead_source;
        })
      : "",
    datasets: [
      {
        label: "Dataset 1",
        data: lead
          ? lead.map((data) => {
              return data.number_of_leads;
            })
          : "",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log("--------------------", data);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
    onClick: (c, i) => {
      // history.push(`/lead-source/${labelData}`)
      setlabelData(c.chart.config._config.data.labels[i[0].index]);
      navigate(`/lead-source/${labelData}`);
      console.log(
        "Get the underlying label for click,",
        c.chart.config._config.data.labels[i[0].index]
      );
    },
  };

  // const ctx = document.getElementById('myChart');
  // const myChart = new Chart(
  //   ctx,
  //   data

  // )

  // const clickHandler = (click)=>{
  //   const points = myChart.getElementsAtEventForMode(click, 'nearest', {intersect: true}, true)
  //   if(points.length){
  //     const firstPoint = points[0];
  //     console.log(firstPoint)
  //   }
  // }

  // ctx.onClick = clickHandler;

  // console.log("Document", document.getElementById())

  // const onClick = (c,i) => {
  //   const data = c.chart?.config._config.data.labels[i[0].index]
  //   console.log('data', data)
  //   console.log('Get the underlying label for click,', c.chart.config._config.data.labels[i[0].index]);
  // }

  return (
    <div>
      {/* <Sidebar/> */}
      <div style={{ margin: 10 }}>
        <Bar
          options={options}
          data={data}
          // if required to build the URL, you can
          // get datasetIndex and value index from an `elem`:
        />
      </div>
    </div>
  );
};

export default BarChart;
