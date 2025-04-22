import { FC, useEffect, useState } from "react";
import styles from "./login.module.scss";
import BlankLayout from "@/base/layouts/blank";
import Title from "@/base/components/title";
import LoginForm from "@/modules/profile/components/login-form";
import { Button } from "@/base/components/button";
import { Link, useNavigate } from "react-router-dom";
import { useBaseStore } from "@/base/stores/useBaseStore";
import { LoginFormValues } from "../../components/login-form/login-form.types";

const Login: FC = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useBaseStore((state) => state);
  const isAuthenticated = useBaseStore((state) => state.isAuthenticated());
  const [formIsValid, setFormIsValid] = useState(false);
  const [dataLogin, setDataLogin] = useState<LoginFormValues>();

  const handleChangeLogin = (data: LoginFormValues) => {
    setDataLogin(data);
  };

  const handleLogin = () => {
    if (dataLogin && formIsValid) {
      setUser(dataLogin.email);
      setToken(dataLogin.password);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <BlankLayout className={styles.login}>
      <Title>Bienvenido</Title>
      <div className={styles.loginFormContainer}>
        <LoginForm
          className={styles.loginForm}
          onChangeData={handleChangeLogin}
          onChangeIsValid={(isValid) => setFormIsValid(isValid)}
        />
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!formIsValid}
          onClick={handleLogin}
        >
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
