import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Text } from "../../ui";

interface FormData {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFieldRef.current?.focus();
  }, []);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    console.log({
      email: emailFieldRef.current?.value,
      password: passwordFieldRef.current?.value,
      language: languageFieldRef.current?.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input ref={emailFieldRef} id="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordFieldRef} id="password" type="password" />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input ref={languageFieldRef} id="language" />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
