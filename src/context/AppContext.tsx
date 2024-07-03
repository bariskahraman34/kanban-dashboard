import { AppContext } from "./context";
import supabase from "../utils/supabase";
import { useState, useEffect } from "react";

export const AppContextProvider = ({children}) => {

  const [columns , setColumns] = useState([]);

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