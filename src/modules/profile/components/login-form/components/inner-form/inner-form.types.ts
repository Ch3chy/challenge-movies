import { FormikProps } from "formik";
import { LoginFormValues } from "../../login-form.types";

export interface InnerFormProps extends FormikProps<LoginFormValues> {
  className?: string;
  onChangeData?: (values: LoginFormValues) => void;
  onChangeIsValid?: (isValid: boolean) => void;
}
