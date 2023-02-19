
import { useState } from 'react';
import './App.css';

import Score from './Components/Score.js'

// function Counter(){
   
//   const [count,setcount]=useState(10);

//   function addone(){
//     setcount(count+1);

//   }
  
  
//   return <>
//         <button onClick={addone} >
//           Click 
//         </button>
//         <p>{count}</p>
  
//   </>
// }

function App() {
  return (
    <div className="App">
      
      <Score/>
    </div>
  );
}

export default App;
