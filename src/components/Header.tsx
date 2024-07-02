import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, minHeight:"64px" }}>
      <AppBar position="fixed" sx={{background:"#fff", color:"rgba(0, 1, 18, 1)"}}>
        <Toolbar>
          <div className="image-container">
            <img src="../../public/kanban_image.svg" alt="" />
          </div>
          <Divider orientation="vertical" flexItem sx={{marginInline:"30px"}} />
          <Typography variant="h6" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
            Platform Launch
          </Typography>
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
          >+Add New Task</Button>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}