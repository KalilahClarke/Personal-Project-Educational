import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './NavBar.css'
import './DateStamp.js'

export default function NavBar({setStartTime}) {
  const navigate = useNavigate()

  const handleClick = (event)=>{

    setStartTime(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now()))
    navigate('/entries/new')

  }
  const returnHome = ()=>{
    navigate('/')
  }
  
  return (
   
    <div className='nav'>
        <h1 onClick ={returnHome}>ECHOES</h1>
        <button className= 'new_entry' onClick ={handleClick}>New Journal Entry</button>    
    </div>
    
  )
}
