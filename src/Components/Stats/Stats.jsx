import { Col, Row, Statistic } from "antd";

import React from "react";
import { Wrapper } from "../../Components";
import millify from "millify";
// import styles from "./Stats.module.css";
import { useGetCryptosQuery } from "../../services/cryptoAPI";

const Stats = () => {
  const response = useGetCryptosQuery(10);
  const { data, isLoading, isError, error } = response;
  const globalStats = data?.stats;

  return (
    <Wrapper isLoading={isLoading} isError={isError} error={error}>
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
            value={millify(+globalStats?.totalExchanges || 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(+globalStats?.totalMarketCap || 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(+globalStats?.total24hVolume || 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(+globalStats?.totalMarkets || 0)}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Stats;
