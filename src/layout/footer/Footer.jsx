import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by{" "}
        <Link to={"https://github.com/mohamad-salimi"}>Mohamad</Link> with 💙
      </p>
    </footer>
  );
}

export default Footer;
