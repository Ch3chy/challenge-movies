export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "normal";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: VoidFunction;
}
