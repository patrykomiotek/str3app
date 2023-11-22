import {
  ChangeEventHandler,
  FormEventHandler,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Input, Text } from "../../ui";

interface Props {
  label: string;
  id: string;
  type: string;
  inputRef: LegacyRef<HTMLInputElement>;
}

const CustomInput = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.type}>{props.label}</label>
      <input id={props.id} type={props.type} ref={props.inputRef} />
    </div>
  );
};

export const RegistrationFormRefsLegacy = () => {
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
    <>
      {/* <Text>
        Email: {formData.email} password: {formData.password}
      </Text> */}
      <form onSubmit={handleSubmit}>
        <CustomInput
          id="email"
          type="email"
          inputRef={emailFieldRef}
          label="E-mail"
        />
        <CustomInput
          id="password"
          type="password"
          inputRef={passwordFieldRef}
          label="Password"
        />
        <CustomInput
          id="language"
          type="language"
          inputRef={languageFieldRef}
          label="E-mail"
        />
        <Button type="submit" label="Send" />
      </form>
    </>
  );
};
