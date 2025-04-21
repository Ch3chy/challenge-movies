import { FC } from "react";
import styles from "./protected.layout.module.scss";
import { Outlet } from "react-router-dom";

const ProtectedLayout: FC = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sideMenu}>Aqui va sidemenu</div>
      <section className={styles.appMain}>
        <Outlet />
      </section>
    </div>
  );
};

export default ProtectedLayout;
