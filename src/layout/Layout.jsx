import Footer from "layout/footer/Footer";
import Header from "layout/header/Header";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
