/* Custom styles */
import "./App.css";

/* Custom Components */
import {
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  Footer,
  Homepage,
  News,
  RoutesMenu,
  Sidebar,
} from "./Components";
/* React imports */
import { Route, Routes } from "react-router-dom";

/* Ant Design imports */
import { Layout } from "antd";
import { useState } from "react";

const { Footer: LayoutFooter, Content } = Layout;
const App = () => {
  const [selectedKey, setSelectedKey] = useState("0");

  const changeSelectedKey = ({ key }) => {
    setSelectedKey(key);
  };
  const Menu = (
    <RoutesMenu
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <Layout className="app">
      <Sidebar menu={Menu} />
      <Layout className="main">
        <Content className="content">
          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route exact path="/exchanges" element={<Exchanges />} />

            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />

            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

            <Route exact path="/news" element={<News />} />
          </Routes>
        </Content>

        <LayoutFooter>
        <Footer />
        </LayoutFooter>
      </Layout>
    </Layout>
  );
};

export default App;
