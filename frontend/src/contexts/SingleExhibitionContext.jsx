import { createContext } from "react";

export const SingleExhibitionContext = createContext();

export const SingleExhibitionProvider = (exhibition) => {
  return (
    <SingleExhibitionContext.Provider
      value={{
        exhibition,
      }}
    ></SingleExhibitionContext.Provider>
  );
};
