import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { useState } from "react";
import { sidebarItems } from "./sidebarItems";
import Avater from "../Reusable/Avater";
import { FormProvider } from "antd/es/form/context"; 
import Music from "../Reusable/Music";
import PlayList from "../UI/PlayList";

 

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentRole, setCurrentRole] = useState('');
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

    <Avater
      src="https://i.ibb.co/MGtJjCN/Group-16-1.png"
      className="ml-4 sm:ml-0 sm:px-6 py-5"
      imageClass="w-full"
    />

   <div className="sidebar_header pb-4">
    <div className=" flex justify-between items-center px-6">
      <h2 className="text-white text-xl	font-semibold">Menu</h2>
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

    
      <div> 
     <div className="playlist">
       <PlayList></PlayList>
     </div>
    </div> 
  </Sider>
  )
}

export default Sidebar