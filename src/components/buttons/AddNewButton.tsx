import { Button } from "@mui/material"

type AddNewButtonProps = {
  text:string;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen?: boolean;
  type:string;
  setDialogType?: React.Dispatch<React.SetStateAction<string>>;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({text,type,setIsModalOpen,isModalOpen,setDialogType}) => {
  return(
    <Button
    onClick={() => {
      if(setIsModalOpen){
        setIsModalOpen(!isModalOpen);
      }
      if(setDialogType){
        setDialogType(type)
      }
    }}
    type="submit"
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