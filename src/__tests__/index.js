import React from "react";
import {
  render,
  waitForElement,
  screen,
  fireEvent,
} from "@testing-library/react";
import App from "../App";

test("home work as expected", async () => {
  const { container } = render(<App />);
  const gifLink = await waitForElement(() =>
    container.querySelector(".Gif-img")
  );

  expect(gifLink).toBeVisible();
});

test("search from could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});
