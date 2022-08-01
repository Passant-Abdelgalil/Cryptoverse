import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltFilled,
  TrophyOutlined,
} from "@ant-design/icons";
import { CoinChart, CoinStats, Wrapper } from "../../Components";
import { Col, Row, Select, Typography } from "antd";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoAPI";

import HTMLReactParser from "html-react-parser";
import millify from "millify";
import styles from "./CryptoDetails.module.css";
import { useParams } from "react-router";
import { useState } from "react";

const { Title } = Typography;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isLoading, isError, error } = useGetCryptoDetailsQuery(coinId);
  const {
    data: coinHistory,
    isLoading: historyIsLoading,
    isError: historyIsError,
    error: historyError,
  } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });

  const times = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const cryptoDetails = data?.data?.coin;
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${millify(+cryptoDetails?.price || 0)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
      icon: <NumberOutlined />,
    },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails && millify(+cryptoDetails["24hVolume"] || 0)}`,
      icon: <ThunderboltFilled />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(+cryptoDetails?.marketCap || 0)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(+cryptoDetails?.allTimeHigh.price || 0)}`,
      icon: <TrophyOutlined />,
    },
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Echanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(+cryptoDetails?.supply?.total || 0)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(+cryptoDetails?.supply?.circulating || 0)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  const timeOptions = times.map((time) => ({
    label: time,
    value: time,
    id: time,
  }));
  return (
    <Wrapper isLoading={isLoading} isError={isError} error={error}>
      {!isLoading && !isError && (
        <Col className={styles["coin-details"]}>
          <Col className={styles["coin-details__heading"]}>
            <Title level={1} className={styles["coin-details__name"]}>
              {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
            </Title>
            <p className={styles["coin-details__intro"]}>
              {cryptoDetails?.name} live price in US dollars. View value
              statistics, market cap and supply
            </p>
          </Col>
          <Col className={styles["coin-details__body"]}>
            <Select
              defaultValue="7d"
              className={styles["coin-details--select"]}
              placeholder="Select Time Period"
              onChange={(value) => setTimePeriod(value)}
              options={timeOptions}
            />
            <CoinChart
              coinHistory={coinHistory}
              currentPrice={millify(+cryptoDetails?.price || 0)}
              coinName={cryptoDetails?.name}
              isLoading={historyIsLoading}
              isError={historyIsError}
              error={historyError}
            />
            <Row
              gutter={[16, 16]}
              className={styles["coin-details__stats"]}
              justify="space-evenly"
            >
              <Col xs={24} md={11} xl={9}>
                <CoinStats
                  stats={stats}
                  name={cryptoDetails?.name}
                  title={cryptoDetails?.name}
                />
              </Col>
              <Col xs={24} md={11} xl={9}>
                <CoinStats
                  stats={genericStats}
                  title="Other Statistics"
                  name="all cryptocurrencies"
                />
              </Col>
            </Row>
            <Row
              gutter={16}
              wrap
              justify="space-between"
              className={styles["coin-details__desc-link"]}
            >
              <Col
                xs={24}
                lg={14}
                className={styles["coin-details__description"]}
              >
                <Title level={2} className={styles["coin-details__title"]}>
                  What is {cryptoDetails?.name}
                </Title>
                {HTMLReactParser(cryptoDetails?.description)}
              </Col>
              <Col
                xs={24}
                md={10}
                xl={8}
                className={styles["coin-details__links"]}
              >
                <Title level={2} className={styles["coin-details__title"]}>
                  {cryptoDetails?.name} Links
                </Title>
                <Col className={styles["coin-details__links__content"]}>
                  {cryptoDetails?.links?.map((link, index) => (
                    <Row
                      wrap
                      justify="space-between"
                      align="middle"
                      className={styles["coin-link"]}
                      key={`${link.name}-${String(index + 1)}`}
                    >
                      <Title level={5} className={styles["coin-link__name"]}>
                        {link.type}
                      </Title>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles["coin-link__value"]}
                      >
                        {link.name}
                      </a>
                    </Row>
                  ))}
                </Col>
              </Col>
            </Row>
          </Col>
        </Col>
      )}
    </Wrapper>
  );
};

export default CryptoDetails;
