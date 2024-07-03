import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TaskType } from '../../types/dataTypes';
import React from 'react';

type CardTypes = {
  task:TaskType
}

const CardComponent:React.FC<CardTypes> = ({task}) => {
  const completedSubtasks = task.subtasks.filter(st => st.status);
  
  return (
    <Card sx={{ width: 280 }}>
      <CardContent sx={{padding:"23px", borderRadius:"30px"}}>
        <Typography variant="body1" component="div" fontWeight="bold">
          {task.title}
        </Typography>
        <Typography color="text.secondary">
          {`${completedSubtasks.length} of ${task.subtasks.length}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent