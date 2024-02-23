import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { useState } from "react";
import { sidebarItems } from "./sidebarItems";

 

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentRole, setCurrentRole] = useState('');
  return (
    <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    width={210}
    style={{
      overflow: "auto",
      height: "100vh",
      position: "sticky",
      left: 0,
      top: 0,
      bottom: 0,
    }}
  >
   <h2 className="bg-red-500">Logo</h2>

    <div className="demo-logo-vertical" />
    <Menu
      className="customSidebar"
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={sidebarItems()}
    />
  </Sider>
  )
}

export default Sidebar