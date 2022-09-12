// DEPENDENCIES
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NewEntry from "./Components/NewEntry";
import IndexEntries from "./Components/IndexEntries";
import ShowEntry from "./Components/ShowEntry";
import EditEntry from "./Components/EditEntry";
import ErrorPage from "./Components/ErrorPage";
// COMPONENTS

function App() {
  const [startTime, setStartTime] = useState();
  
  return (
    <div className="App">
      <Router>
        <NavBar setStartTime={setStartTime} />
        <main>
          <Routes>
           <Route path='/'element ={<Home />}/>
            <Route path ='/entries/new' element={<NewEntry startTime ={startTime}/>} />
            <Route path ='/entries' element={<IndexEntries/>} />
            <Route path ='entries/:index' element={<ShowEntry/>} />
            <Route path ='entries/:index/edit' element={<EditEntry/>} />
            <Route path ='*' element={<ErrorPage/>} />


          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
