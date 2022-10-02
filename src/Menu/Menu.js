import './Menu.css';

function Menu(props) {

  const handleClick = (e) => {
    const main_panel = e.target.getAttribute('name');
    props.changePanel(main_panel);
  }

  return (
    <div className='menu'>
      <h1>Menu</h1>
      <div className='menu_bt_container'>
        <div className='menu_bt bt_home' name="home" onClick={handleClick}>Home</div>
        <div className='menu_bt bt_whiteboard' name="whiteboard" onClick={handleClick}>Whiteboard</div>
        <div className='menu_bt bt_calendar' name="calendar" onClick={handleClick}>Calendar</div>
      </div>
      
    </div>
  );
}

export default Menu;