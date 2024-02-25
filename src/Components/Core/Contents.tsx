"use client";
import { Content } from "antd/es/layout/layout";
import Header from "./Header";
 
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <Header/>
      <div
        className="p-8 backgroundImage bg-[#1E1E1E]"
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;