import { Button, Typography } from "@mui/material";

export default function AddColumn() {
  return (
    <Button 
    sx={{
      backgroundColor: "rgba(233, 239, 250, 0.5)",
      padding:"55px",
      borderRadius:"20px",
      color:"rgba(130, 143, 163, 1)",
      fontWeight:"bold",
      minWidth:"auto",
      '&:hover': {
          color: "rgba(99, 95, 199, 1)", 
      }
    }}>
      <Typography sx={{whiteSpace: 'nowrap'}}>
        +New Column
      </Typography>
    </Button>
  )
}
