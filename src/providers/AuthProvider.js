import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  <AuthContext.Provider value={{ isAuthenticated: false }}>
    {children}
  </AuthContext.Provider>;
};
