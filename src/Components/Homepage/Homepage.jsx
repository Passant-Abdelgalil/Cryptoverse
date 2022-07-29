import { Cryptocurrencies, News, StatsComponent } from "../../Components";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import styles from "./Homepage.module.css";

const { Title } = Typography;

const Homepage = () => {
  return (
    <Fragment>
      <Title level={2} className={styles["heading"]}>
        Global Crypto Stats
      </Title>
      <StatsComponent />
      <div className={styles["home-heading-container"]}>
        <Title level={2} className={styles["home-title"]}>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className={styles["show-more"]}>
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className={styles["home-heading-container"]}>
        <Title level={2} className={styles["home-title"]}>
          Latest Crypto News
        </Title>
        <Title level={3} className={styles["show-more"]}>
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>

      <News simplified />
    </Fragment>
  );
};

export default Homepage;
