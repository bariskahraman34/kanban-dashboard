import { Container, Typography, CircularProgress } from '@mui/material';
import Header from './components/Header';
import useAppContext from './context/context';
import Column from './components/board/Column';
import NewColumn from './components/buttons/NewColumn';
import AddNewButton from './components/buttons/AddNewButton';
import FormDialog from './components/dialogs/FormDialog';
import { useState } from 'react';

function App() {
  const { columns, isLoading } = useAppContext();
  const [isModalOpen , setIsModalOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');

  return (
    <>
      <Header setDialogType={setDialogType} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {isLoading ? 
      (
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <CircularProgress />
        </Container>
      ) 
      : 
      columns.length > 0 ? 
      (
        <Container sx={{ display: 'flex', marginTop: '24px', gap: '24px' }}>
          {columns.map((col, index) => (
            <Column key={index} column={col} tasks={col.tasks} />
          ))}
          <NewColumn setDialogType={setDialogType} setIsModalOpen={setIsModalOpen} />
        </Container>
      ) 
      : 
      (
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <Typography>This board is empty. Create a new column to get started.</Typography>
          <AddNewButton type='column' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} text="+Add New Column" />
        </Container>
      )}
      <FormDialog dialogType={dialogType} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;