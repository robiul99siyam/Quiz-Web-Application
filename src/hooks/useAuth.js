import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";
export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  if (auth?.user?.email) {
    localStorage.setItem("authToken", JSON.stringify(auth?.authToken));
  }
  useDebugValue(auth, (auth) => (auth?.user ? "user Loged in" : "user logout"));
  return useContext(AuthContext);
};
