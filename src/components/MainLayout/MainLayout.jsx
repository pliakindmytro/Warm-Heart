import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.app}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
