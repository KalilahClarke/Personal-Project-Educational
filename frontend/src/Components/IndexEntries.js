import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Entry from './Entry';
import './IndexEntries.css'

const API = process.env.REACT_APP_API_URL;

export default function IndexEntries() {
    const [entries, setEntries] = useState([])

    useEffect(()=>{
        axios
            .get(`${API}/entries`)
            .then((res)=>{setEntries(res.data)})
            .catch((error)=> console.error(error));
    },[]);

    
  return (

    <div className='all_entries'>
        <section className='entries_index'>
            {entries.map((entry,index)=>{
                return (
                    <Entry key ={index} entry = {entry}/>
                )
            })}
        </section>
    </div>
  )
}
