import { Button } from "@mui/material"

type AddNewButtonProps = {
  text:string;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({text}) => {
  return(
    <Button 
    variant='contained'
    sx={{
      textTransform:"none",
      fontWeight:"700",
      backgroundColor: "rgba(99, 95, 199, 1)",
      borderRadius: "20px",
      '&:hover': {
        backgroundColor: "rgba(168, 164, 255, 1)"
      }
    }}
    >{text}</Button>
  )
}

export default AddNewButton