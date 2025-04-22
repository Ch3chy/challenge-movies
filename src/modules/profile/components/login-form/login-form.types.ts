export type LoginFormValues = {
  email: string;
  password: string;
};

export interface LoginFormProps {
  className?: string;
  onChangeData?: (values: LoginFormValues) => void;
  onChangeIsValid?: (isValid: boolean) => void;
}
