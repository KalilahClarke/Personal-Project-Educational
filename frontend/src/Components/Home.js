import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css'


export default function Home() {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date());
  
  console.log(date)
  const handleClick = () =>{
    navigate('/entries')
  }
  


  return (
    <div className='home'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <button onClick={handleClick}>All Entries</button>
    </div>
  );

}
