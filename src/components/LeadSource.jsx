import React, { useEffect, useState } from "react";
import axiosInstance from "./Config/axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labelData }) => {
  const [leadSource, setLeadSource] = useState("");
  useEffect(() => {
    console.log("LeadSource", labelData);
    const getLeads = async () => {
      const response = await axiosInstance.post("/lead-origin", {
        data: labelData,
        "Content-Type": "multipart/form-data",
      });
      const rescon = await response?.data;
      console.log("Raw Data", rescon);
      setLeadSource(await rescon);
    };
    getLeads();
  }, []);

  const data = {
    labels: leadSource
      ? leadSource.map((data) => {
          return data.lead_origin;
        })
      : "",
    datasets: [
      {
        label: "# of Votes",
        data: leadSource
          ? leadSource.map((data) => {
              return data.no_of_leads;
            })
          : "",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
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
        text: "Pie Chart",
      },
    },
  };
  return (
    <div style={{ width: 600 }}>
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;
