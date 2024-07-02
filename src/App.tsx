import { Container } from "@mui/material"
import Header from "./components/Header"
import Column from "./components/board/Column"
import NewColumn from "./components/board/NewColumn"
import supabase from "./utils/supabase"
import { useEffect, useState } from "react"

function App() {
  const [data , setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const {data, error} = await supabase.from('columns').select(`
        id,
        column_name,
        tasks (title)
        `)
      if(!error){
        setData(data);
      }
    }

    getData()
  }, [])

  console.log(data);

  return (
    <>
      <Header />
      <Container sx={{display:"flex",marginTop:"24px", gap:"24px"}}>
        <Column />
        <Column />
        <Column />
        <Column />
        <NewColumn />
      </Container>
      
    </>
  )
}

export default App
