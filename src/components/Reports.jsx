import React, { useEffect, useState, useRef } from "react";
import axiosInstance from "./Config/axios";
import LeadSource from "../components/LeadSource";

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
  const navigate = useNavigate();

  useEffect(() => {
    const getLeads = async () => {
      const response = await axiosInstance.get("/lead-source");
      // console.log("Response1234", response?.data);
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
    onClick: async (c, i) => {
      let leadData = await c.chart.config._config.data.labels[i[0].index];
      setlabelData(leadData);
      navigate("/reports");
    },
  };

  // const clickHandler = (click)=>{
  //   const points = myChart.getElementsAtEventForMode(click, 'nearest', {intersect: true}, true)
  //   if(points.length){
  //     const firstPoint = points[0];
  //     console.log(firstPoint)
  //   }
  // }

  // const onClick = async (c, i) => {
  //   console.log("Chart", c);
  //   const data = await c?.chart?.config._config.data.labels[i[0].index];
  //   console.log("data", data);
  //   console.log(
  //     "Get the underlying label for click,",
  //     c.chart.config._config.data.labels[i[0].index]
  //   );
  // };

  return (
    <div>
      {/* <Sidebar/> */}
      <div style={{ margin: 10 }}>
        <Bar
          options={options}
          data={data}
          // onClick={(e, index) => onClick(e, index)}
          // if required to build the URL, you can
          // get datasetIndex and value index from an `elem`:
          style={{ cursor: "pointer" }}
        />
      </div>
      {labelData ? <LeadSource labelData={labelData} /> : ""}
    </div>
  );
};

export default BarChart;
