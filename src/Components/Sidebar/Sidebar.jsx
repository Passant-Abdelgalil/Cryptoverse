import { Avatar, Button, Menu, Typography } from "antd";
import {
  BulbFilled,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import React from "react";
/* icons */
import icon from "../../images/cryptocurrency.png";
/* custom styles */
import styles from "./Sidebar.module.css";

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};
// const menuItems = [getItem("Home", "home", <HomeOutlined />, [<Link to="/">Cryptoverse</Link>])];

const Navbar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles["logo-container"]}>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className={styles["logo"]}>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark" className={styles["nav-links"]}>
        <Menu.Item icon={<HomeOutlined />} className={styles["nav-link"]}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} className={styles["nav-link"]}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item
          icon={<MoneyCollectOutlined />}
          className={styles["nav-link"]}
        >
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbFilled />} className={styles["nav-link"]}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default Navbar;
