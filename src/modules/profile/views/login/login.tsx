import { FC, useState } from "react";
import styles from "./login.module.scss";
import BlankLayout from "@/base/layouts/blank";
import Title from "@/base/components/title";
import LoginForm from "@/modules/profile/components/login-form";
import { Button } from "@/base/components/button";
import { Link } from "react-router-dom";

const Login: FC = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  return (
    <BlankLayout className={styles.login}>
      <Title>Bienvenido</Title>
      <div className={styles.loginFormContainer}>
        <LoginForm
          className={styles.loginForm}
          onChangeIsValid={(isValid) => setFormIsValid(isValid)}
        />
        <Button variant="primary" size="lg" fullWidth disabled={!formIsValid}>
          Iniciar sesión
        </Button>
      </div>
      <div className={styles.loginFooter}>
        <Link to="/login">
          ¿No tienes una cuenta? <strong>Regístrate</strong>
        </Link>
      </div>
    </BlankLayout>
  );
};

export default Login;
