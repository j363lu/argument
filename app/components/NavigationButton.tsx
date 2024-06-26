import { useAppDispatch } from '@/lib/hooks';
import { incrementPage, incrementPart2Page, incrementPart3Page, incrementPart4Page } from '@/lib/pageSlice';
import { Container, Box, Button } from '@mui/material';

function NavigationButton({ disableNext, action=()=>{}, part2 = false, part3 = false, part4 = false }: { disableNext?: boolean, action?: () => void, part2?: boolean, part3?:boolean, part4?:boolean }) {
  const dispatch = useAppDispatch();

  const nextPage = () => {
    action();

    if (part2) {
      dispatch(incrementPart2Page());
    } else if (part3) {
      dispatch(incrementPart3Page());
    } else if (part4) {
      dispatch(incrementPart4Page());
    } else {
      dispatch(incrementPage());
    }
    

    // scroll to the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container maxWidth="md" disableGutters sx={{marginBottom: "30px", marginTop: "30px"}}>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={nextPage} variant="contained" disabled={disableNext}>
          Next &#62;
        </Button>
      </Box>
    </Container>
  );
}

export default NavigationButton;