jest.mock("../../hooks/useViewPort", () => {
  // const original = jest.requireActual("../../hooks/useViewPort");

  return {
    // for all
    // useViewPort: jest.fn().mockImplementation(() => ({ x: 100, y: 200 })),
    // ...original,
    useViewPort: jest.fn(),
  };
});

import { render, screen } from "@testing-library/react";
import { ViewPort } from ".";
import { useViewPort } from "../../hooks/useViewPort";

const mockedUseViewPort = useViewPort as jest.Mock;

describe("ViewPort component", () => {
  it("should render viewport values (100x200)", () => {
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 100, y: 200 }));
    // mockedUseViewPort.mockRejectedValueOnce
    const { debug } = render(<ViewPort />);
    debug();
    expect(screen.getByText(/x: 100, y: 200/i)).toBeInTheDocument();
  });
  it("should render viewport values (400x600)", () => {
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 400, y: 600 }));
    const { debug } = render(<ViewPort />);
    debug();
    expect(screen.getByText(/x: 400, y: 600/i)).toBeInTheDocument();
  });
});
