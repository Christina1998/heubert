import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  DashboardOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Leads from '../Leads';
import Sidebar from '../Sidebar';
const { Header, Sider, Content } = Layout;
const App = () => {
    const location = useLocation();
    console.log(location.pathname)
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sidebar/>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 15,
            minHeight: 280,
          }}
        >
          <Leads/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;