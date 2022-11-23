import React, { useState } from 'react';
// import '../../src/Styles/style.scss';
import {  Menu, Image } from 'antd';
import Sider from 'antd/es/layout/Sider';
import {
  TeamOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();
    console.log(location.pathname)
    const [collapsed, setCollapsed] = useState(false);

    return(
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{margin:20}}>
        <Image
    width={50}
    src="/cat-logo.png"
  />
            </div>
        <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
     

        <Menu.Item key="/">
          <TeamOutlined />
          <span>Leads</span>
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="/reports">
          <DashboardOutlined />
          <span>Reports</span>
          <Link to="/reports"></Link>
        </Menu.Item>
      </Menu>
      </Sider>
)
}
export default Sidebar; 
