import { createContext, useState } from "react";

export const ContextData = createContext(null);

function Context({ children }) {
  const [value, setValue] = useState(0);

  return (
    <ContextData.Provider value={{value, setValue}}>
      {children}
    </ContextData.Provider>
  );
}

export default Context;