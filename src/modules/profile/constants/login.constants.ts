import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electronico inválido")
    .required("El correo electronico es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
