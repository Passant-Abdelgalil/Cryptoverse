import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Col, Row, Typography } from "antd";

import { Chart } from "react-chartjs-2";
import React from "react";
import { Wrapper } from "..";
import styles from "./CoinChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = ({
  coinHistory,
  currentPrice,
  coinName,
  isLoading,
  isError,
  error,
}) => {
  const coinPrice = [];
  const coinTimestamp = [];

  coinHistory?.data?.history?.forEach((value) => {
    coinPrice.push(value.price);
    coinTimestamp.push(new Date(value.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        data: coinPrice,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          showLabelBackdrop: true,
        },
      },
    },
    responsive: true,
    legend: {
      display: true,
      position: "left",
    },
  };

  return (
    <Wrapper isLoading={isLoading} isError={isError} error={error}>
      <Row
        wrap
        gutter={16}
        justify="space-between"
        align="middle"
        className={styles["chart-heading"]}
      >
        <Typography.Title level={2} className={styles["chart-heading__title"]}>
          {coinName} Price Chart
        </Typography.Title>
        <Col className={styles["chart-heading__price"]}>
          <Typography.Title level={5} className={styles["price-change"]}>
            Change: {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className={styles["current-price"]}>
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <div className={styles["chart-container"]}>
        <Chart type="line" data={data} options={options} />
      </div>
    </Wrapper>
  );
};

export default LineChart;
