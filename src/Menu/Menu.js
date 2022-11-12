// import './Menu.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useState } from 'react';


function Menu(props) {

  const drawerWidth = 200;

  const handleClick = (e, index) => {
    setSelectedIndex(index);
    props.changePanel(index);
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
        // height: '100%'
      }}
      variant="permanent"
      anchor="left"
    >
      <List sx={{ bgcolor: 'black', height: '100%', padding: 1 }}>
        <ListItem><Typography variant='h2' sx={{ color: 'white', bgcolor: 'black', fontWeight: 5 }}>Menu</Typography></ListItem>
        <Box sx={{bgcolor: 'white', height: '80%', borderRadius: 1}}>
          <ListItemButton
          className='menu_bt bt_home'
          name="Home"
          selected={selectedIndex === 0}
          onClick={(event) => handleClick(event, 0)}>
          <ListItemText primary='Home' />
        </ListItemButton>
        <ListItemButton
          className='menu_bt bt_whiteboard'
          name="Projects"
          selected={selectedIndex === 1}
          onClick={(event) => handleClick(event, 1)}>
          <ListItemText primary='Whiteboard' />
        </ListItemButton>
        <ListItemButton
          className='menu_bt bt_calendar'
          name="Calendar"
          selected={selectedIndex === 2}
          onClick={(event) => handleClick(event, 2)}>
          <ListItemText primary='Calendar' />
        </ListItemButton>
        </Box>
        
      </List>
    </Drawer>
  )
}

export default Menu;