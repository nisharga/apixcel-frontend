import { 
  HomeOutlined,
  TikTokOutlined,
  SettingOutlined,
  LogoutOutlined 
  } from "@ant-design/icons";
  import type { MenuProps } from "antd";
  import Link from "next/link";
  
  export const sidebarItems = ( ) => {
    const sidebarItems: MenuProps["items"] = [
      {
        label: <Link href={`/`}>Home</Link>,
        icon: <HomeOutlined />,
        key: `home`,
      },
      {
        label: <Link href={`/podcast`}>Podcast</Link>,
        icon: <TikTokOutlined />,
        key: `podcast`,
      },
      {
        label: <Link href={`/settings`}>Settings</Link>,
        icon: <SettingOutlined />,
        key: `settings`,
      },
      {
        label: <Link href={`/logout`}>Logout</Link>,
        icon: <LogoutOutlined />,
        key: `logout`,
      },
    ];
    return sidebarItems;
  };