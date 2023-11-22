import { useState, createContext } from "react";

export const ExhibitionsContext = createContext();

export const ExhibitionsProvider = (props) => {
  const [exhibitions, setExhibitions] = useState([]);

  return (
    <ExhibitionsContext.Provider
      value={{
        exhibitions,
        setExhibitions,
      }}
    >
      {props.children}
    </ExhibitionsContext.Provider>
  );
};
