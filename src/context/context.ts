import { createContext, useContext } from "react";
import { ColumnType } from "../types/dataTypes";

type AppContextProps = {
  columns: ColumnType[];
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

const useAppContext = () => {
  const context = useContext(AppContext)
  if(!context){
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
}

export default useAppContext