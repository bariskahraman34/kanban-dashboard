import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import CardComponent from './Card';

export default function Column() {
  return (
    <Container sx={{padding:"0px !important"}}>
      <Typography variant='body2' sx={{letterSpacing:".2rem", marginBottom:"24px"}}>TODO (0)</Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item>
            <CardComponent/>
          </Grid>
          <Grid item >
            <CardComponent/>
          </Grid>
          <Grid item>
            <CardComponent/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
