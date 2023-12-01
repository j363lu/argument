import { Container, Box, Button } from '@mui/material';

function NavigationButton() {
  return (
    <Container maxWidth="md" disableGutters sx={{marginBottom: "30px"}}>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" >
          Next &#62;
        </Button>
      </Box>
    </Container>
  );
}

export default NavigationButton;