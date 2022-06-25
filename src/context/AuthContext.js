import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedinEmail, setLoggedinEmail] = useState("");
  const [loggedinUser, setLoggedinUser] = useState({});

  return (
    <UserContext.Provider
      value={{ loggedinEmail, setLoggedinEmail, loggedinUser, setLoggedinUser }}
    >
      {" "}
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
