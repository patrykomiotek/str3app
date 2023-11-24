import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { Button, Text } from "../../ui";

interface FormData {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormState = () => {
  const [validationError, setValidationError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "jan@wp.pl",
    password: "",
    language: "",
  });

  useEffect(() => {
    // componentDidMount
  }, []);

  useEffect(() => {
    // componentDidUpdate or componentDidMount
  }, [formData.email]);

  useEffect(() => {
    if (formData.language.toLocaleLowerCase() === "php") {
      setFormData({
        ...formData,
        language: "***** ***",
      });
      setValidationError(true);
    }
  }, [formData.language]);

  // const handleChange = (event: ChangeEvent) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [language, setLanguage] = useState();

  const { email, language, password } = formData;

  return (
    <>
      <Text>
        Email: {formData.email} password: {formData.password}
      </Text>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleChange}
            className="border-2 border-stone-700"
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleChange}
            className="border-2 border-stone-700"
          />
        </div>
        <div className="my-2">
          <label htmlFor="language">Language</label>
          <input
            id="language"
            value={language}
            onChange={handleChange}
            className="border-2 border-stone-700"
          />
          {validationError && <p>Invalid language</p>}
        </div>
        <Button type="submit" label="Send" />
      </form>
    </>
  );
};
