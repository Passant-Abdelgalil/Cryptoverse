import { Col, Result, Row, Spin, Statistic, Typography } from "antd";
import { Cryptocurrencies, News } from "../../Components";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import styles from "./Homepage.module.css";
import { useGetCryptosQuery } from "../../services/cryptoAPI";

const { Title } = Typography;

const Homepage = () => {
  const { data, isLoading, isError } = useGetCryptosQuery(10);
  if (isLoading) return <Spin tip="Loading..."></Spin>;
  if (isError)
    return (
      <Result status="500" title="500" subTitle="Sorry, something went wrong" />
    );
  const globalStats = data?.data?.stats;

  return (
    <Fragment>
      <Title level={2} className={styles["heading"]}>
        Global Crypto Stats
      </Title>
      <Row className={styles["stats-container"]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
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
