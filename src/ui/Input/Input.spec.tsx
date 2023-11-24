import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Input } from ".";

describe("Input component", () => {
  it("should have no violations", async () => {
    const { container } = render(<Input label="name" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
