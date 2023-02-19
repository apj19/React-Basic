
import { useState } from 'react';
import './App.css';

function Counter(){
   
  const [count,setcount]=useState(10);

  function addone(){
    setcount(count+1);

  }
  
  
  return <>
        <button onClick={addone} >
          Click 
        </button>
        <p>{count}</p>
  
  </>
}

function App() {
  return (
    <div className="App">
      
      <h1>Hi APJ</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
