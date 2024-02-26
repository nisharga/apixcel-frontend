import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { useEffect, useState } from "react";
import { sidebarItems } from "./sidebarItems";
import Avater from "../Reusable/Avater";
import { FormProvider } from "antd/es/form/context"; 
import Music from "../Icons/Music";
import PlayList from "../UI/PlayList";
import Logo from "../Reusable/Logo";
import {  
  LogoutOutlined 
  } from "@ant-design/icons";
 

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentRole, setCurrentRole] = useState('');

    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
      // Retrieve token from localStorage
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
  }, []);
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Reset token state
    setToken(null);

    setTimeout(() => {
      window.location.reload();
    }, 2000);

  };

  return (
    <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    width={260}
    style={{
      overflow: "auto",
      height: "100vh",
      position: "sticky",
      left: 0,
      top: 0,
      bottom: 0,
    }}
  >

    <div className="ml-4 sm:ml-0 sm:px-6 py-5"><Logo/></div>

   <div className="sidebar_header pb-4">
    <div className=" flex justify-between items-center px-6">
      <h2 className="text-white text-lg md:text-xl	font-semibold">Menu</h2>
      <div className="h-[1px] bg-white w-16"></div>
    </div>
   </div>

    <div className="demo-logo-vertical" />
    <Menu
      className="customSidebar"
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={sidebarItems()}
    />

{token && <button onClick={handleLogout} className="text-white text:base md:text-xl	font-semibold ml-7"><span className="mr-5"><LogoutOutlined /></span>Logout</button>}
      <div> 
    

     <div className="playlist">
       <PlayList></PlayList>
     </div>
    </div> 
  </Sider>
  )
}

export default Sidebar