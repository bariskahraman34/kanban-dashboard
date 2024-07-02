import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardComponent() {
  return (
    <Card sx={{ width: 280 }}>
      <CardContent sx={{padding:"23px", borderRadius:"30px"}}>
        <Typography variant="body1" component="div" fontWeight="bold">
          Build UI for onboarding flow
        </Typography>
        <Typography color="text.secondary">
          0 of 3 substasks
        </Typography>
      </CardContent>
    </Card>
  );
}
