import Menu from './Menu/Menu.js'
import Home from './Home/Home.js'
import Projects from './Projects/Projects.js'
import Calendar from './Calendar/Calendar.js'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
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

function App() {
  const [main, setMain] = useState(<Home />);
  const [title, setTitle] = useState('Home');

  const drawerWidth = 200;

  const panelIndexToName = {
    0: 'Home',
    1: 'Projects',
    2: 'Calendar'
  }

  const changePanel = (panelIndex) => {
    // console.log(panelName);
    const panelName = panelIndexToName[panelIndex]
    setTitle(panelName);
    switch (panelName) {
      case "Home":
        setMain(<Home />);
        break;
      case "Calendar":
        setMain(<Calendar />);
        break;
      case "Projects":
        setMain(<Projects />);
        break;
      default:
        setMain(<Home />);
        break;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box component="nav">
        <Menu changePanel={changePanel} />
      </Box>
      <Box
        component='main'
        sx={{
          p: 2,
          float: 'right',
          height: '100%',
          width: { sm: `calc(100% - ${drawerWidth + 30}px)` },
          bgcolor: 'black'
        }}>
        <Typography
          variant='h2'
          align='center'
          sx={{ color: 'white', bgcolor: 'black' }}>
          {title}
        </Typography>
        <Box 
          sx={{ 
            bgcolor: 'white', 
            height: '80%', 
            borderRadius: 1, 
            overflowY: 'auto',
            p: 2 }}>
          {main}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
