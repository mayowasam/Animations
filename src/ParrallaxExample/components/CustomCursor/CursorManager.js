import React, { createContext, useState } from "react";



export const CursorContext = createContext({
  projectTitle: "",
  setProjectTitle: () => {},
});

export default function CursorManager({ children }) {
  const [projectTitle, setProjectTitle] = useState("");

  const handleSetProjectTitle = (value) => setProjectTitle(value);
  return (
    <CursorContext.Provider
      value={{ 
        projectTitle, 
        setProjectTitle: handleSetProjectTitle 
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}
