import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="divar-logo" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" alt="location-icon" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="profile-icon" />
            دیوار من
          </span>
        </Link>
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
