"use client"
import { 
  HomeOutlined,
  TikTokOutlined,
  SettingOutlined,
  LogoutOutlined 
  } from "@ant-design/icons";
  import type { MenuProps } from "antd";
  import Link from "next/link";
import { useEffect, useState } from "react";
  




  export const sidebarItems = ( ) => {
 
    const sidebarItems: MenuProps["items"] = [
      {
        label: <Link href={`/`} > <span className="text-white text:base md:text-xl	font-semibold">Home</span> </Link>,
        icon: <HomeOutlined className="text-white text:base md:text-xl	font-semibold"/>,
        key: `home`,
      },
      {
        label: <Link href={`/podcast`} > <span className="text-white text:base md:text-xl	font-semibold">Podcast</span> </Link>,
        icon: <TikTokOutlined />,
        key: `podcast`,
      },
      {
        label: <Link href={`/settings`} > <span className="text-white text:base md:text-xl	font-semibold">Settings</span> </Link>,
        icon: <SettingOutlined />,
        key: `settings`,
      },
       
    ];
    return sidebarItems;
  };

  