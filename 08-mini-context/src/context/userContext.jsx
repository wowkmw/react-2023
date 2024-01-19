/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext, useContext } from "react";

const UserContext = createContext(null);

const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
