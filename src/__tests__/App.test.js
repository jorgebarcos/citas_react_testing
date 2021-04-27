import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("<App /> La aplicación funciona bien la primera vez", () => {
  //   const wrapper = render(<App />);
  //   wrapper.debug();
  render(<App />);

  expect(screen.getByText("Administrador de Pacientes")).toBeInTheDocument();
  expect(screen.getByTestId("nombre-app").textContent).toBe(
    "Administrador de Pacientes"
  );
  expect(screen.getByTestId("nombre-app").tagName).toBe("H1");

  expect(screen.getByText("Crear Cita")).toBeInTheDocument();
  expect(screen.getByText("No hay citas")).toBeInTheDocument();
});
