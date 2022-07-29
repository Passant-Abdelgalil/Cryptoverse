import { Card, Col, Input, Row } from "antd";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Wrapper } from "../../Components";
import millify from "millify";
import styles from "./Cryptocurrencies.module.css";
import { useGetCryptosQuery } from "../../services/cryptoAPI";

const Cryptocurrencies = (props) => {
  const count = props.simplified ? 10 : 100;
  const {
    data: cryptosList,
    isLoading,
    isError,
    error,
  } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins?.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  return (
    <Wrapper isLoading={isLoading} isError={isError} error={error}>
      {!props.simplified && (
        <div className={styles["search-crypto"]}>
          <Input
            placeholder="Search Cryptocurreny"
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles["search-crypto__input"]}
          />
        </div>
      )}

      <Row gutter={[32, 32]}>
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            xl={6}
            key={currency.uuid}
            className={styles["crypto-col"]}
          >
            <Link
              to={`/crypto/${currency.uuid}`}
              className={styles["crypto-item"]}
            >
              <Card
                title={`${currency.rank}. ${currency.name}`}
                className={styles["crypto-card"]}
                extra={
                  <img
                    className={styles["crypto-image"]}
                    src={currency.iconUrl}
                    alt={`${currency.name}`}
                  />
                }
                hoverable
              >
                <p>Price: {millify(+currency.price)}</p>
                <p>Market Cap: {millify(+currency.marketCap)}</p>
                <p>Daily Change: {millify(+currency.change)}$</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Cryptocurrencies;
