import { Avatar, Card, Col, Row, Select, Typography } from "antd";

import { Wrapper } from "../../Components";
import moment from "moment";
import styles from "./News.module.css";
import { useGetCryptoNewsQuery } from "../../services/crpytoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoAPI";
import { useState } from "react";

const { Text, Title } = Typography;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Crtyptocurrency");

  const count = simplified ? 6 : 12;
  const {
    data: cryptoNews,
    isLoading,
    isError,
  } = useGetCryptoNewsQuery({ newsCategory, count });

  const { data: cryptos } = useGetCryptosQuery(100);

  const filterNews = (input, option) => {
    return option.label.toLowerCase().includes(input.toLowerCase());
  };
  const options = cryptos?.data?.coins?.map((coin) => ({
    label: coin.name,
    value: coin.name,
    id: coin.uuid,
  }));

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <Row gutter={[10, 10]} className={styles["row"]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              notFoundContent="None"
              defaultValue="Cryptocurrency"
              className={styles["select-news"]}
              placeholder="Select a Crypto"
              optionFilterProp="label"
              onChange={(value) => setNewsCategory(value)}
              filterOption={filterNews}
              size="large"
              options={options}
            />
          </Col>
        )}
        {cryptoNews?.value?.map((news, i) => (
          <Col
            xs={24}
            md={12}
            lg={8}
            key={i}
            span={8}
            flex={1}
            className={styles["news-col"]}
          >
            <Card
              hoverable
              className={styles["news-card"]}
              bodyStyle={{ flexGrow: "1" }}
            >
              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                className={styles["news-card__wrapper"]}
              >
                <header className={styles["news-header"]}>
                  <Title className="news-header__title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                    className={styles["news-header__image"]}
                  />
                </header>
                <p className={styles["news-description"]}>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <footer className={styles["news-footer"]}>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                    className={styles["news-footer__avatar"]}
                  />
                  <Text className={styles["news-footer__text"]}>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </footer>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default News;
