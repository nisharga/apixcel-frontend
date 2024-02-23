import { 
    QuestionCircleOutlined 
  } from "@ant-design/icons";
  import type { MenuProps } from "antd";
  import Link from "next/link";
  
  export const sidebarItems = ( ) => {
    const sidebarItems: MenuProps["items"] = [
      {
        label: <Link href={`/about`}>About</Link>,
        icon: <QuestionCircleOutlined />,
        key: `about`,
      },
    ];
    return sidebarItems;
  };