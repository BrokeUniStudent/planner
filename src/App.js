import Menu from './Menu/Menu.js'
import Home from './Home/Home.js'
import Projects from './Projects/Projects.js'
import Calendar from './Calendar/Calendar.js'
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Bai Jamjuree',
    },
    h1: {
      fontWeight: 2,
    },
    h2: {
      fontWeight: 5,
    }
  },
});

let main = <Home />;

function setPanelElement(title) {
  switch (title) {
    case "Calendar":
      main = (<Calendar />);
      break;
    case "Projects":
      main = (<Projects />);
      break;
    default:
      main = (<Home />);
      break;
  }
}

function App() {
  const [title, setTitle] = useState('Home');

  const panelIndexToName = {
    0: 'Home',
    1: 'Projects',
    2: 'Calendar'
  }

  const changePanel = (panelIndex) => {
    const panelName = panelIndexToName[panelIndex]
    setTitle(panelName);
    setPanelElement(panelName);
  }

  return (
    <ThemeProvider theme={theme}>

      <Grid container>

        <Grid item xs='auto'>
          <Box
            p={2}
            position='relative'
            top='20%'
          >
            <Menu changePanel={changePanel} />
          </Box>

        </Grid>

        <Grid item xs>
          <Box
            // eslint-disable-next-line
            minHeight={screen.availHeight}
            p={2}
          >
            <Typography
              variant='h2'
              align='center'
              className='title'
              color='white'
            >
              {title}
            </Typography>
            <Box
            // eslint-disable-next-line
              minHeight={screen.availHeight - 50}
              minWidth={50*7}
              sx={{
                bgcolor: 'white',
                borderRadius: 1,
                p: 2
              }}>
              {main}
            </Box>
          </Box>
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}

export default App;
