
import React from 'react'
import { useState,useEffect } from 'react'

const StateMgm = () => {
    const [city, setCity ] =useState("Hyderabed");

    useEffect(()=>{
        if(city ==="Hyderabed"){
            setCity("Banglore")
        }else{
            setCity("Vizag")
        }

    },[])

  return (
    <div>
        <h1>I Live in the {city}</h1>
    </div>
  )
}

export default StateMgm