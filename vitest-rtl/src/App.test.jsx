import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"; // Import act from react-dom/test-utils
import App from "./App";

describe("App component", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should increment a counter", () => {
    act(() => {
      render(<App />, container);
    });

    const button = container.querySelector("button");

    act(() => {
      for (let i = 0; i < 3; i++) {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(button.innerHTML).toBe("3");
  });
});
