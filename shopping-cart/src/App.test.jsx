import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)

test("should show login form", () => {
  render(<Home />);
  const input = screen.getByLabelText("Username");
  // Events and assertions...
});

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
