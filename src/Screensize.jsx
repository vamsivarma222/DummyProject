
import React from 'react'
import { useState,useEffect } from 'react'

const Screensize = () => {
const [screenSize,setScreenSize]=useState({
    width: window.innerWidth,
    height: window.innerHeight,
});

const updateScreenSize =() =>{
    setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
}

useEffect (()=>{
    window.addEventListener('resize', updateScreenSize);
    return()=>{
        window.removeEventListener('resize',updateScreenSize);
    };
},[]);
  return (
    <div>
        <h1>Screensize(change screensize)</h1>
        <p sytle={{color:"Red"}}>Width:{screenSize.width}px</p>
        <p style={{color:"Red"}}>Width:{screenSize.width}px</p>
        <p style={{color:"Red"}}>Height:{screenSize.height}px</p>
    </div>

  )
}

export default Screensize