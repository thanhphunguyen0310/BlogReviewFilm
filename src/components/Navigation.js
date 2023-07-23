import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
export default function Navigation(props) {
  const {colors}=props
  const [color, setColor] = useState("white");
  let change;
  function toggle(color) {
    let change=color==='black'?'white':'black'
    colors(change)
    setColor(change);
  }
  
  
  return (
    <div className="row"  >
      <nav>
        <ul>
          <li>
           <HomeIcon sx={{ color:"#fff" }}/> <Link to='/'>Home</Link>
          </li>
          <li>
            <ArticleIcon sx={{ color:"#fff" }}/><a>News</a>
          </li>
          <li>
           <InfoIcon sx={{ color:"#fff" }}/> <a>About</a>
          </li>
          <li>
            <PermContactCalendarIcon sx={{ color:"#fff" }}/><Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="switch-mode">
          <button        
            href="#"
            onClick={()=>toggle(color)}
          >
            Mode
          </button>
        </div>
    </div>
  );
}
