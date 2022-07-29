import {
  BulbFilled,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Menu } from "antd";
import React from "react";

const RoutesMenu = ({ selectedKey, changeSelectedKey }) => {
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
      icon: <MoneyCollectOutlined />,
      path: "/exchanges",
      title: "Exchanges",
    },
    {
      icon: <BulbFilled />,
      path: "/news",
      title: "News",
    },
  ];

  return (
    <Menu
      onClick={changeSelectedKey}
      mode="inline"
      theme="dark"
      selectedKeys={[selectedKey]}
      items={items?.map((item, index) => ({
        key: String(index + 1),
        icon: item.icon,
        label: <Link to={item.path}>{item.title}</Link>,
      }))}
    />
  );
};

export default RoutesMenu;
