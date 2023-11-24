import { render, screen, fireEvent } from "@testing-library/react";
import { Generator } from ".";

describe("Generator component", () => {
  // test('')
  it("should generate different values", () => {
    // getByLabel
    const { debug } = render(<Generator />);
    debug();
    const id = screen.getByText(/[a-z0-9-]{36}/i).textContent;

    // console.log(id);
    fireEvent.click(screen.getByRole("button"));

    const newId = screen.getByText(/[a-z0-9-]{36}/i).textContent;

    expect(newId).not.toBe(id);
  });

  it.todo("should generate different values");
  it.todo("should check sth");
  it.skip("should check sth", () => {});
});
