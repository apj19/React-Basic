import React, { useState } from 'react'

function Effect() {

    const [count,setcount]=useState([1,2,3,4]);

    function add(){
        let randomnum=Math.round((Math.random()*10)) ;
        
        
        setcount([...count,randomnum])
    }

    console.log(count);
  return (
    <>
    <button onClick={add} >
           Click 
         </button>
         {count.map((e)=>{
          return <p key={e}>{e}</p>

         }
         
         )}
    </>
  )
}

export default Effect