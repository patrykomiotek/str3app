import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Input, Text } from "../../ui";

interface FormData {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormRefs = () => {
  // register(name) -> createRef

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
      <Input
        label="E-mail"
        ref={emailFieldRef}
        defaultValue="jan@wp.pl"
        type="email"
      />
      <Input label="Password" ref={passwordFieldRef} type="password" />
      <Input label="Language" ref={languageFieldRef} />
      <Button type="submit" label="Send" />
    </form>
  );
};
