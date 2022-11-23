import React, { useEffect, useState } from "react";
import axiosInstance from "./Config/axios";
import { Input, Layout, Space, Table, Tag } from "antd";
// const { Header, Content, Footer } = Layout;

const Leads = () => {
  const [lead, setLead] = useState("");
  const [searchText, setSearchText] = useState("");

  // const leadLists =
  // lead?.map((list, index) => ({
  //   ...list,
  //   index: index + 1,
  // })) ?? [];

  // console.log("123", leadLists)

  // const data = loading
  // ? "wait"
  // :  ({ "Lead Number": lead[0].lead_number, "Lead Origin": lead[0].lead_origin, "Lead Source": lead[0].lead_source, "Lead Stage": lead[0].lead_stage, "Enagagement Score": lead[0].engagement_score });

  useEffect(() => {
    const getLeads = async () => {
      const response = await axiosInstance.get("/users");
      const rescon = await response?.data;
      setLead(await rescon);
      console.log("Response", response?.data);
    };
    getLeads();
  }, []);

  console.log("Leads", lead);

  const columns = [
    {
      title: "Lead number",
      dataIndex: "lead_number",
      key: "lead_number",
      sorter: (a, b) => a.lead_number - b.lead_number,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Lead Origin",
      dataIndex: "lead_origin",
      key: "lead_origin",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return (
          String(record.lead_origin)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.lead_source).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Lead Source",
      dataIndex: "lead_source",
      key: "lead_source",
    },
    {
      title: "Engagement Score",
      dataIndex: "engagement_score",
      key: "engagement_score",
      sorter: (a, b) => a.engagement_score - b.engagement_score,
    },
    {
      title: "Last Activity date",
      dataIndex: "last_activity_date",
      key: "last_activity_date",
      sorter: (a, b) => a.last_activity_date - b.last_activity_date,
    },
  ];

  const leadLists = lead
    ? lead.map((list, index) => ({
        ...list,
        index: index + 1,
      })) ?? []
    : "";

  return (
    <div>
      {/* <Sidebar/> */}
      <div style={{ margin: 10 }}>
        <Input.Search
          placeholder="Search Here"
          style={{ margin: 20, float: "right", width: 180 }}
          onSearch={(text) => {
            setSearchText(text);
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Table columns={columns} dataSource={leadLists} />;
      </div>
    </div>
  );
};

export default Leads;
