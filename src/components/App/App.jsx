import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../../pages/MainPage";
import ShopPage from "../../pages/ShopPage";
import CardPage from "../../pages/CardPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      {/* <MainPage /> */}
      {/* <ShopPage /> */}
      {/* <CardPage /> */}
      <ShoppingCartPage />

      <Footer />
    </div>
  );
}

export default App;
