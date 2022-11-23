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
import Reports from '../Reports';
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
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Reports/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;