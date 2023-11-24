import { render, screen } from "@testing-library/react";
import { ProductDetails } from "./ProductDetails";

describe("ProductDetails component", () => {
  it("should render loading indicator", () => {
    render(<ProductDetails id="1234" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should render loading indicator", async () => {
    const { debug } = render(<ProductDetails id="1234" />);
    debug();
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });
});
