import { Space, Typography } from "antd";

import { Link } from "react-router-dom";
/* Custom styles */
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography.Title level={5} style={{ color: "white" }}>
        Cryptoverse <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </footer>
  );
};

export default Footer;
