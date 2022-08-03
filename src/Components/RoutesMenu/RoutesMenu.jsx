import { BulbFilled, FundOutlined, HomeOutlined } from "@ant-design/icons";

import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";

const items = [
  {
    icon: <HomeOutlined />,
    path: "/",
    title: "Home",
  },
  {
    icon: <FundOutlined />,
    path: "/cryptocurrencies",
    title: "Cryptocurrencies",
  },
  {
    icon: <BulbFilled />,
    path: "/news",
    title: "News",
  },
];
const RoutesMenu = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState();
  useEffect(() => {
    const index = items.findIndex((item) => {
      return item.path === location.pathname;
    });
    setSelectedKey((index+1).toString());
  }, [location.pathname]);

  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={[selectedKey]}
      items={items?.map((item, index) => ({
        key: String(index + 1),
        icon: item.icon,
        label: <NavLink to={item.path}>{item.title}</NavLink>,
      }))}
    />
  );
};

export default RoutesMenu;
