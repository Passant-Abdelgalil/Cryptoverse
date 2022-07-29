import { Col, Row, Statistic } from "antd";

import React from "react";
import { Wrapper } from "../../Components";
import millify from "millify";
// import styles from "./Stats.module.css";
import { useGetCryptosQuery } from "../../services/cryptoAPI";

const Stats = () => {
  const { data, isLoading, isError } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(+globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(+globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(+globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(+globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Stats;
