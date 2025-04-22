import { FC, useEffect, useMemo } from "react";
import styles from "./protected.layout.module.scss";
import { useBaseStore } from "@/base/stores/useBaseStore";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "@/base/components/sidemenu";
import { MenuItemProps } from "@/base/components/sidemenu/sidemenu.types";

const ProtectedLayout: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useBaseStore((state) => state.isAuthenticated());

  const footerMenu: MenuItemProps[] = [
    { icon: "SignOut", path: "/users/logout", label: "Salir" },
  ];

  const menu = useMemo(() => {
    const items: MenuItemProps[] = [
      { icon: "Books", path: "/books", label: "Libros" },
    ];

    return items.map((item) => ({
      ...item,
      active: pathname.indexOf(item.path) >= 0,
    }));
  }, [pathname]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.sideMenu}>
        <SideMenu menuItems={menu} footerItems={footerMenu} />
      </div>
      <section className={styles.appMain}>
        <Outlet />
      </section>
    </div>
  );
};

export default ProtectedLayout;
