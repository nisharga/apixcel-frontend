"use client";
import { Layout } from "antd"
import Sidebar from "./Sidebar"
import Contents from "./Contents"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout> 
  )
}

export default DashboardLayout