import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { SketchPicker } from '@hello-pangea/color-picker';


function Menu(props) {

  const handleClick = (e, index) => {
    setSelectedIndex(index);
    props.changePanel(index);
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <List>
        <Box sx={{ bgcolor: 'white', borderRadius: 1 }}>
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

        <SketchPicker
          color={localStorage['backgroundColor'] || '#ffffff'}
          onChangeComplete={(color, e) => {
            localStorage['backgroundColor'] = color.hex;
            document.body.style.background = localStorage['backgroundColor'];
          }}
        />
      </List>
    </>

  )
}

export default Menu;