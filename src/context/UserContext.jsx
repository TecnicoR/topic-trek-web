import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id : "1",
    name : "Rabinarayan Patra",
    image : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
