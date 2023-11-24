import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegistrationFormState } from ".";

describe("RegistrationFormState", () => {
  it("should validate form", async () => {
    const { debug } = render(<RegistrationFormState />);

    // screen.getAllByRole('textbox')
    const emailField = screen.getByLabelText(/e-mail/i);
    const passwordField = screen.getByLabelText(/password/i);
    const languageField = screen.getByLabelText(/language/i);

    // fireEvent.change(emailField, { target: { value: "patryk@wp.pl" } });
    // fireEvent.change(passwordField, { target: { value: "12345" } });
    // fireEvent.change(languageField, { target: { value: "php" } });

    await userEvent.type(emailField, "patryk@wp.pl");
    await userEvent.type(passwordField, "12345");
    await userEvent.type(languageField, "php");

    expect(screen.getByDisplayValue(/\*\*\*\*\* \*\*\*/i)).toBeInTheDocument();
    expect(screen.getByText(/invalid language/i)).toBeInTheDocument();

    debug();
  });
});
