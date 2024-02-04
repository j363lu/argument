import { useAppDispatch } from '@/lib/hooks';
import { incrementPage } from '@/lib/pageSlice';
import { Container, Box, Button } from '@mui/material';

function NavigationButton({ disableNext, action=()=>{} }: { disableNext?: boolean, action?: () => void }) {
  const dispatch = useAppDispatch();

  const nextPage = () => {
    action();
    dispatch(incrementPage());

    // scroll to the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container maxWidth="md" disableGutters sx={{marginBottom: "30px"}}>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={nextPage} variant="contained" disabled={disableNext}>
          Next &#62;
        </Button>
      </Box>
    </Container>
  );
}

export default NavigationButton;