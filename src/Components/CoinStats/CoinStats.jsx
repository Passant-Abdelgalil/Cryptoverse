import { Col, Typography } from "antd";
import React, { Fragment } from "react";

import styles from "./CoinStats.module.css";

const { Title, Text } = Typography;

const CoinStats = ({ stats, title, name, style }) => {
  return (
    <Fragment>
      <Col className={styles["coin-stats__heading"]}>
        <Title level={3} className={styles["coin-stats__heading__title"]}>
          {name} Statistics
        </Title>
        <p className={styles["coin-stats__heading__paragraph"]}>
          An overview showing the stats of {title}
        </p>
      </Col>
      <Col className={styles["coin-stats__content"]}>
        {stats.map(({ icon, title, value }) => (
          <Col className={styles["coin-stat__content"]} key={title}>
            <Col className={styles["coin-stat__name"]}>
              <Text className={styles["coin-stat__icon"]}>{icon}</Text>
              <Text className={styles["coin-stat__text"]}>{title}</Text>
            </Col>
            <Text className={styles["coin-stat__value"]}>{value}</Text>
          </Col>
        ))}
      </Col>
    </Fragment>
  );
};

export default CoinStats;
