import { Avatar, Card, Col, Result, Row, Spin, Typography } from "antd";

import moment from "moment";
import styles from "./News.module.css";
import { useGetCryptoNewsQuery } from "../../services/crpytoNewsApi";

const { Text, Title } = Typography;

// const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const News = ({ simplified }) => {
  const count = simplified ? 6 : 12;
  const {
    data: cryptoNews,
    isLoading,
    isError,
  } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count });
  if (isLoading) return <Spin tip="Loading..."></Spin>;
  if (isError)
    return (
      <Result status="500" title="500" subTitle="Sorry, something went wrong" />
    );
  return (
    <Row gutter={[10, 10]} className={styles["row"]}>
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
                    news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
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
  );
};

export default News;
