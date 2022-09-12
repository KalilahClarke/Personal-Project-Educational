import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./DateStamp";
import "./NewEntry.css";

const API = process.env.REACT_APP_API_URL;

export default function NewEntry({ startTime }) {
  const todaysDate = startTime.slice(0, 8);
  const [entry, setEntry] = useState({
    name: "",
    start_time: startTime,
    date: todaysDate,
    image: "https://images.wondershare.com/recoverit/article/2019/11/video-error-code-3.jpg",
    entry_info: "",
  });

 
  const navigate = useNavigate();
  const addEntry = () => {
    const endTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(Date.now());
    console.log(endTime);
    axios
      .post(`${API}/entries`, { ...entry, end_time: endTime })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  console.log(entry)
  const handleTextChange = (e) => {
    setEntry({ ...entry, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEntry();
  };

  return (
    <div className="new_entrypage">
      <h1>Journal Entry:</h1>
      <h2>{todaysDate}</h2>
      <input
        id="name"
        placeholder="Entry Name"
        value={entry.name}
        onChange={handleTextChange}
      />
      <br></br>
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
