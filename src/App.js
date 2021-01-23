import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import "./App.css";


//App react component
function App() {
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <Quote />
    </div>
  );
}


export default App;
