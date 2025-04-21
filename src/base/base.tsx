import { FC } from "react";
import styles from "./base.module.scss";
import { Outlet } from "react-router-dom";

const Base: FC = () => {
  return (
    <div className={styles.principalMain}>
      <main className={styles.appContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default Base;
