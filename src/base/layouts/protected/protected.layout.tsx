import { FC, useEffect } from "react";
import styles from "./protected.layout.module.scss";
import { useBaseStore } from "@/base/stores/useBaseStore";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedLayout: FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useBaseStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

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
