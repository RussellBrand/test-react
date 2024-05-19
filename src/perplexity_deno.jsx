// Import the necessary modules
import React from "https://dev.jspm.io/react@17.0.2";
import { render, screen, fireEvent } from "https://dev.jspm.io/@testing-library/react@12.1.5";
import { JSDOM } from "https://esm.sh/v135/jsdom@16.2.2/denonext/jsdom.mjs";
import { Button } from "./Button.jsx";
import App from "./App.jsx";

// Create a new JSDOM instance
const { window } = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
  runScripts: "dangerously",
  resources: "usable",
});

// Provide the JSDOM window object to the testing library
Object.defineProperty(window, "TextEncoder", {
  writable: true,
  value: TextEncoder,
});
Object.defineProperty(window, "TextDecoder", {
  writable: true,
  value: TextDecoder,
});
global.window = window;
global.document = window.document;
global.navigator = window.navigator;

// Run the test
Deno.test("Button click should add a to-do item", async () => {
  render(<App />);

  const iptext = await screen.findByTestId("iptext");
  const add_button = await screen.findByTestId("add_button");

  fireEvent.change(iptext, { target: { value: "Test to-do item" } });
  fireEvent.click(add_button);

  const to_do_items = await screen.findAllByTestId("to-do-item");
  assertEquals(to_do_items.length, 1);
});
