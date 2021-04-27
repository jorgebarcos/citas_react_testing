import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "../components/Formulario";
import "@testing-library/jest-dom/extend-expect";

test("<Formulario /> Cargar el formulario y revisar que todo sea correcto", () => {
  // Revisa que el componente se monto correctamente y revisa su estructura html
  //   const wrapper = render(<Formulario />);
  //   wrapper.debug();

  render(<Formulario />);
  expect(screen.getByText("Crear Cita")).toBeInTheDocument();

  // Heading
  const titulo = screen.getByTestId("titulo");
  expect(titulo.tagName).toBe("H2");
  expect(titulo.tagName).not.toBe("H1");
  expect(titulo.textContent).toBe("Crear Cita");

  // Botón de Submit
  expect(screen.getByTestId("btn-submit").tagName).toBe("BUTTON");
  expect(screen.getByTestId("btn-submit").textContent).toBe("Agregar Cita");
  expect(screen.getByTestId("btn-submit").textContent).not.toBe(
    "Agregar Nueva Cita"
  );
});
