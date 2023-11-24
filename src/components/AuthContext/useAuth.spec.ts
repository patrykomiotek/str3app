import { renderHook, act } from "@testing-library/react";
import { useAuth } from "./AuthContext";

describe("useAuth hook", () => {
  it("should change user values", () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.isLoggedIn).toBeFalsy();

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isLoggedIn).toBeTruthy();
  });
});
