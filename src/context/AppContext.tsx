import { AppContext } from "./context";
import supabase from "../utils/supabase";
import React, { useState, useEffect, ReactNode } from "react";
import { ColumnType } from "../types/dataTypes";

type AppContextProviderProps = {
  children: ReactNode;
}

export const AppContextProvider : React.FC<AppContextProviderProps> = ({children}) => {

  const [columns , setColumns] = useState<ColumnType[]>([]);

  useEffect(() => {
    async function getData() {
      const {data:column , error:columnError} = await supabase.from('columns').select(`id,column_name,tasks(column_id,title,description,subtasks(subtask,status))`);
      if(!columnError){
        setColumns(column);
      }
    }

    getData()
  }, [])

  return(
    <AppContext.Provider value={{columns}}>
      {children}
    </AppContext.Provider>
  )
}