import { useEffect } from "react";
import styles from "./inner-form.module.scss";
import { InnerFormProps } from "./inner-form.types";

const InnerForm = ({
  values,
  errors,
  touched,
  isValid,
  className,
  handleChange,
  handleBlur,
  onChangeData,
  onChangeIsValid,
}: InnerFormProps) => {
  useEffect(() => {
    if (onChangeData) onChangeData(values);
  }, [values, onChangeData]);

  useEffect(() => {
    if (onChangeIsValid) onChangeIsValid(isValid);
  }, [isValid, onChangeIsValid]);

  return (
    <form className={`${styles.customerForm} ${className || ""}`}>
      <div className={styles.formSection}>
        <label htmlFor="login-email" className={styles.label}>
          Correo electrónico:
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          value={values.email}
          className={styles.input}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className={styles.error}>{errors.email}</div>
        )}
      </div>
      <div className={styles.formSection}>
        <label htmlFor="login-password" className={styles.label}>
          Contraseña:
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          value={values.password}
          className={styles.input}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className={styles.error}>{errors.password}</div>
        )}
      </div>
    </form>
  );
};

export default InnerForm;
