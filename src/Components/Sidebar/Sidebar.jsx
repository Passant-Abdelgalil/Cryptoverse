import { Avatar, Layout, Typography } from "antd";

import { Link } from "react-router-dom";
/* icons */
import icon from "../../images/cryptocurrency.png";
/* custom styles */
import styles from "./Sidebar.module.css";

const { Sider } = Layout;

const Sidebar = ({ menu }) => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className={styles.sidebar}
    >
      <div className={styles["logo-container"]}>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className={styles["logo"]}>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      {menu}
    </Sider>
  );
};

export default Sidebar;
