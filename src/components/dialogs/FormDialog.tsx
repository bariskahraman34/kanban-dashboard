import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddNewButton from '../buttons/AddNewButton';
import supabase from '../../utils/supabase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Box } from '@mui/material';

type FormDialogProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type:string;
}

const FormDialog: React.FC<FormDialogProps> = ({ type, isModalOpen, setIsModalOpen }) => {
  
  const statusOptions = [
    { name: 'Todo', color: '#FF4C4C' },
    { name: 'In Progress', color: '#FFA500' },
    { name: 'Review', color: '#FFD700' },
    { name: 'Completed', color: '#4CAF50' },
    { name: 'Blocked', color: '#808080' },
    { name: 'Backlog', color: '#2196F3' },
  ];

  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);


  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleAddColumn = async (columnName: FormDataEntryValue) => {
    const {error} = await supabase
    .from('columns')
    .insert([{column_name: columnName, status_color:selectedStatus.color}])

    if(error){
      console.log(error)
    }
  }

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formObj = Object.fromEntries(formData);
            handleAddColumn(formObj.column);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add New Column</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can add new column from here.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="column"
            name="column"
            label="Column Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <FormControl fullWidth sx={{marginTop:"20px"}}>
            <InputLabel id="status">Status</InputLabel>
            <Select
            label="Status"
            value={selectedStatus.name}
            onChange={(e) => {
              const selected = statusOptions.find(status => status.name === e.target.value);
              if (selected) setSelectedStatus(selected);
            }}
          >
            {statusOptions.map((status, index) => (
              <MenuItem key={index} value={status.name}>
                <Box
                  sx={{
                    display: 'inline-block',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    backgroundColor: status.color,
                    marginRight: 1,
                  }}
                />
                {status.name}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{display:"flex",flexDirection:"column"}}>
          <AddNewButton setIsModalOpen={setIsModalOpen} text={"+ Add New Column"}/>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormDialog