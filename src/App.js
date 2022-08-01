/* Custom styles */
import "./App.css";

/* Custom Components */
import {
  CryptoDetails,
  Cryptocurrencies,
  Footer,
  Homepage,
  News,
  RoutesMenu,
  Sidebar,
  PageNotFound,
} from "./Components";
/* React imports */
import { Route, Routes } from "react-router-dom";

/* Ant Design imports */
import { Layout } from "antd";

const { Footer: LayoutFooter, Content } = Layout;
const App = () => {
  const Menu = <RoutesMenu />;
  return (
    <Layout className="app">
      <Sidebar menu={Menu} />
      <Layout className="main">
        <Content className="content">
          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />

            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

            <Route exact path="/news" element={<News />} />

            <Route path="*" element={<PageNotFound />} />
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
