import { Container } from "@mui/material"
import Header from "./components/Header"
import Column from "./components/board/Column"
import NewColumn from "./components/board/NewColumn"
import useAppContext from "./context/context"

function App() {

  const {columns} = useAppContext();

  return (
    <>
      <Header />
      <Container sx={{display:"flex",marginTop:"24px", gap:"24px"}}>
        {columns.map((col,index) => (
          <Column key={index} column={col} tasks={col.tasks} />
        ))}
        <NewColumn />
      </Container>
      
    </>
  )
}

export default App
