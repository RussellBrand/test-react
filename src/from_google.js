// Import the render, screen, and fireEvent functions from the React testing library.
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

// Import the Button component.
import App from "./App";

// Run a test to see if the application can add to-do items without errors.
test("Button click should add a to-do item", () => {
  // Render the application by passing App to render.
  render(<App />);

  // Define the DOM elements iptext and add_button.
  const iptext = screen.getByTestId("iptext");
  const add_button = screen.getByTestId("add_button");

  // Simulate user input by typing "Test to-do item" into the input field.
  fireEvent.change(iptext, { target: { value: "Test to-do item" } });

  // Simulate user input by clicking the "Add" button.
  fireEvent.click(add_button);

  // Assert that the to-do item was added to the list.
  const to_do_items = screen.getAllByTestId("to-do-item");
  expect(to_do_items).toHaveLength(1);
});
