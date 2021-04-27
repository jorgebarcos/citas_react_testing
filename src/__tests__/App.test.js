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

test("<App /> La aplicación funciona bien la primera vez", () => {
  render(<App />);

  userEvent.type(screen.getByTestId("mascota"), "Hook");
  userEvent.type(screen.getByTestId("propietario"), "Jorge");
  userEvent.type(screen.getByTestId("fecha"), "2021-04-04");
  userEvent.type(screen.getByTestId("hora"), "11:42");
  userEvent.type(screen.getByTestId("sintomas"), "Solo Duerme");

  //  Click en el botón de submit
  const btnSubmit = screen.getByTestId("btn-submit");
  userEvent.click(btnSubmit);

  // Revisar por la alerta
  const alerta = screen.queryByTestId("alerta");
  expect(alerta).not.toBeInTheDocument();

  // Revisar por el titulo dinamico
  expect(screen.getByTestId("titulo-dinamico").textContent).toBe(
    "Administra tus Citas"
  );
  expect(screen.getByTestId("titulo-dinamico").textContent).not.toBe(
    "No hay citas"
  );
});
