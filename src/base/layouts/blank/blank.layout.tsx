import { FC } from "react";
import styles from "./blank.layout.module.scss";
import { Outlet } from "react-router-dom";
import { BlankLayoutProps } from "./blank.types";

const BlankLayout: FC<BlankLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.image}>
        <img
          src={
            "https://media.istockphoto.com/id/1413840933/es/foto/libros-viejos-en-estante-de-madera-fondo-de-estanter%C3%ADa-de-azulejos-concepto-sobre-el-tema-de.jpg?s=612x612&w=0&k=20&c=xxRW34dVd05eI3GfYp_92GUE-BS4TUXVcf6qzLpdOSY="
          }
          alt="blank_mobile"
        />
        <img
          src="https://kalashxblog.wordpress.com/wp-content/uploads/2016/02/libros-antiguos-apilados-lentes-y-pergamino-sobre-libro-abierto.jpg"
          alt="blank_desktop"
          className={styles.imageDesktop}
        />
      </div>
      <div className={styles.content}>{children ? children : <Outlet />}</div>
    </div>
  );
};

export default BlankLayout;
