import React from 'react'
import {Link} from 'react-router-dom'
import './IndexEntries.css'

export default function Entry({entry}) {
  return (
    <div className ='entry'>
        <Link to={`/entries/${entry.id}`}>
            <h5>{entry.date}</h5>
            <p>{entry.name}</p>
        </Link>
    </div>
  )
}
