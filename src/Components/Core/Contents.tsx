"use client";
import { Content } from "antd/es/layout/layout";
 
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <h2>Header</h2>
      <div
        className="p-8 backgroundImage "
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