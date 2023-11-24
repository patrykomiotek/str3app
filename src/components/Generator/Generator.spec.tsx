import { render } from "@testing-library/react";
import { Generator } from ".";

describe("Generator component", () => {
  // test('')
  it("should generate different values", () => {
    const { debug } = render(<Generator />);
    debug();
  });

  it.todo("should generate different values");
  it.todo("should check sth");
  it.skip("should check sth", () => {});
});
