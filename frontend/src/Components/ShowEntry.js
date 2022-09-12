import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './ShowEntry.css'

export default function ShowEntry() {
    const [entry, setEntry] = useState({})
    let {index} = useParams()
    const navigate = useNavigate();

    const API = process.env.REACT_APP_API_URL

    useEffect(()=>{
        axios
            .get(`${API}/entries/${index}`)
            .then((res)=>setEntry(res.data))
            .catch((error)=> console.log(error))
    }, [index, navigate, API])

    const deleteEntry = () =>{
        axios
            .delete(`${API}/entries/${index}`)
            .then(()=>navigate('/entries'))
            .catch((error)=>console.error('catch',error))
    };
    console.log(entry.name)
    const handleDelete = () =>{
        deleteEntry()
    }

  return (
    <div className='show_entry'>
        <img src={entry.image}/>
        <p>{entry.entry_info}</p>
        <button onClick={()=>{navigate('/entries')}}>Back</button>
        <Link to ={`/entries/${index}/edit`}>
        <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>

    </div>
  )
}
