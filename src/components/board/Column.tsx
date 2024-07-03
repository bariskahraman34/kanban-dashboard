import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import CardComponent from './Card';
import { TaskType,ColumnType } from '../../types/dataTypes';

type ColumnProps = {
  tasks: TaskType[];
  column: ColumnType;
}

const Column :React.FC<ColumnProps> = ({tasks,column}) => {
  return (
    <Container sx={{padding:"0px !important"}}>
      <Grid display="flex" alignItems="center" marginBottom="24px" width="max-content">
        <Box
          sx={{
            display: 'inline-block',
            width: 15,
            height: 15,
            borderRadius: '50%',
            backgroundColor: column.status_color,
            marginRight: 1,
          }}
        />
        <Typography variant='body2' sx={{letterSpacing:".2rem",textTransform:"uppercase"}}>{column.column_name} ({tasks.length})</Typography>
      </Grid>
      <Box>
        <Grid container spacing={2}>
          {
            tasks.map((task,index) => (
              <Grid key={index} item>
                <CardComponent task={task} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Container>
  )
}

export default Column;