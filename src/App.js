import './App.css';
import Menu from './Menu/Menu.js'
import Home from './Home/Home.js'
import Projects from './Projects/Projects.js'
import Calendar from './Calendar/Calendar.js'
import { useState } from 'react';

function App() {
  const [main, setMain] = useState(<Home />);

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
      <Menu changePanel={changePanel} />
      <div className='main'>
        {main}
      </div>
      
    </div>
  );
}

export default App;
