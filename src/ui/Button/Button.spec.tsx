import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Button } from ".";

describe("Button component", () => {
  it("should render correctly ;)", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it("should have no violations", async () => {
    const { container } = render(<Button label="Click me" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
