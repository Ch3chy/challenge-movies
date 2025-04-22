import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Button from "./button";
import styles from "./button.module.scss";

describe("Componente Button", () => {
  it("renderiza el texto pasado", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("aplica la clase proporcionada", () => {
    render(<Button className="custom-class">Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button.className).toContain("custom-class");
  });

  it("aplica la variante normal por defecto", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button.className).toContain(styles.button);
  });

  it("aplica la variante especificada", () => {
    render(<Button variant="primary">Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button.className).toContain(styles.button);
  });

  it("aplica el tamaño md por defecto", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button.className).toContain(styles.button);
  });

  it("aplica el tamaño especificado", () => {
    render(<Button size="lg">Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button.className).toContain(styles.button);
  });

  it("aplica fullWidth cuando se especifica", () => {
    render(<Button fullWidth>Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button.className).toContain(styles.buttonFullWidth);
  });

  it("se deshabilita cuando disabled es true", () => {
    render(<Button disabled>Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button).toBeDisabled();
    expect(button.className).toContain(styles.buttonDisabled);
  });

  it("llama al onClick cuando se hace clic", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);
    const button = screen.getByText("Test Button");
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
