import { FC } from "react";
import { LoginFormProps } from "./login-form.types";
import { Formik } from "formik";
import InnerForm from "./components/inner-form/inner-form";
import { validationSchema } from "@/modules/profile/constants/login.constants";

const LoginForm: FC<LoginFormProps> = ({
  className,
  onChangeData,
  onChangeIsValid,
}) => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      className={className}
      onSubmit={() => undefined}
    >
      {(props) => (
        <InnerForm
          {...props}
          className={className}
          onChangeData={onChangeData}
          onChangeIsValid={onChangeIsValid}
        />
      )}
    </Formik>
  );
};

export default LoginForm;
