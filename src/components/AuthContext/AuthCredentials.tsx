import { MouseEventHandler } from "react";
import { useAuthContext } from "./AuthContext";
import { Button } from "../../ui";

export const AuthCredentials = () => {
  const context = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    context.toggle();
  };

  return (
    <div>
      <h3 className="text-2xl">AuthCredentials</h3>
      <p>Is user logged? {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button label="Toggle" onClick={handleClick} />
    </div>
  );
};
