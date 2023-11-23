import { MouseEventHandler, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    context.toggle();
  };

  return (
    <div>
      <h3>AuthCredentials</h3>
      <p>Is user logged? {context.isLoggedIn ? "YES" : "NO"}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
