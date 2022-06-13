import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedinEmail, setLoggedinEmail] = useState("");

  return (
    <UserContext.Provider value={{ loggedinEmail, setLoggedinEmail }}>
      {" "}
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
