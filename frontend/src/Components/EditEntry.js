import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import axios from "axios";
import './EditEntry.css'

const API = process.env.REACT_APP_API_URL;

export default function EditEntry() {
  const navigate = useNavigate();
  let { index } = useParams();

  console.log(index)


  const [entry, setEntry] = useState({
    name: "",
    start_time:'',
    date: '',
    image:
      "https://images.wondershare.com/recoverit/article/2019/11/video-error-code-3.jpg",
    entry_info: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/entries/${index}`)
      .then((res) => setEntry(res.data))
      .catch((error) => console.error(error));
  }, [index, API]);

  const updateEntry = () => {
    axios
      .put(`${API}/entries/${index}`, entry)
      .then((res) => {
        setEntry(res.data);
        navigate(`/entries/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setEntry({ ...entry, [event.target.id]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry();
  };
  return (
    <div className="edit">
      <h1>EDIT</h1>
      <h2>Journal Entry: {entry.date}</h2>
      <textarea
        id="entry_info"
        value={entry.entry_info}
        type="text"
        placeholder="Journal Entry"
        onChange={handleTextChange}
        rows="20"
        cols="100"
      ></textarea>
      <br></br>
      <button onClick={handleSubmit}>Submit Edit</button>
    </div>
  );
}
