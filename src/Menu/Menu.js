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


function Menu(props) {

  const drawerWidth = 200;

  const handleClick = (e) => {
    const main_panel = e.target.getAttribute('name');
    props.changePanel(main_panel);
  }

  return (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
            <List>
              <ListItem><Typography variant='h2'>Menu</Typography></ListItem>
              <ListItem className='menu_bt bt_home' name="home" onClick={handleClick}>Home</ListItem>
              <ListItem className='menu_bt bt_whiteboard' name="whiteboard" onClick={handleClick}>Whiteboard</ListItem>
              <ListItem className='menu_bt bt_calendar' name="calendar" onClick={handleClick}>Calendar</ListItem>
            </List>
        </Drawer>
  )
}

export default Menu;