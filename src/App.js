import React from "react";
import Sgpa from "./Components/Sgpa";
import "./styles.css";
import { BsCalculatorFill } from "react-icons/bs";
import RetroHitCounter from 'react-retro-hit-counter';
export default function App() {

  return (
        <div className="container">
          <div className="title">
            <h1><BsCalculatorFill/>SRMist</h1> 
            <h2>GPA Calculator</h2>
          </div>

          <Sgpa/>


<div className="counter">total visitors : 
<a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=8151394&style=0038&nbdigits=5&type=page&initCount=313" title="Free Counter" Alt="web counter"   border="0" /></a>                                    
  </div>


          <div class="copyright">
              <span>Made by  </span>
              <span><a href="https://www.linkedin.com/in/pradeep-singh-b57881207"> pradeep singh</a></span>
             </div>
        </div>

  );
}
