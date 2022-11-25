import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import LeadSource from "../LeadSource";
import Sidebar from "../Sidebar";
const { Header, Sider, Content } = Layout;
const App = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: 20,
            padding: 15,
            minHeight: 280,
          }}
        >
          <LeadSource />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
