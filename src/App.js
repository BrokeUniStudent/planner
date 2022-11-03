// import './App.css';
import Menu from './Menu/Menu.js'
import Home from './Home/Home.js'
import Projects from './Projects/Projects.js'
import Calendar from './Calendar/Calendar.js'
import { useState } from 'react';
import Box from '@mui/material/Box';

function App() {
  const [main, setMain] = useState(<Home />);

  const drawerWidth= 250;

  const changePanel = (panelName) =>{
    // console.log(panelName);
    switch (panelName){
      case "home":
        setMain(<Home />);
        break;
      case "calendar":
        setMain(<Calendar />);
        break;
      case "whiteboard":
        setMain(<Projects />);
        break;
      default:
        setMain(<Home />);
        break;
    }
    
  }

  return (
    <div>
      <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
        <Menu changePanel={changePanel} />
      </Box>
      <Box component='main' sx={{p: 2, float:'right', width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
        {main}
      </Box>
      
    </div>
  );
}

export default App;
