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
  Sidebar,
} from "./Components";
/* React imports */
import { Route, Routes } from "react-router-dom";

/* Ant Design imports */
import { Layout } from "antd";

const App = () => {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Layout>
          <div className="routes">
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
          </div>
        </Layout>
      </main>
      <Footer />
    </div>
  );
};

export default App;
