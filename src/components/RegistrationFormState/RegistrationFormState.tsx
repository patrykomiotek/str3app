import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Button, Text } from "../../ui";

interface FormData {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormState = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    language: "",
  });

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

  return (
    <>
      <Text>
        Email: {formData.email} password: {formData.password}
      </Text>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" onChange={handleChange} />
        </div>
        <Button type="submit" label="Send" />
      </form>
    </>
  );
};
