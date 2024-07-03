import { createContext, useContext } from "react";

export const AppContext = createContext<undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext)
  if(!context){
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
}

export default useAppContext