import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  
  async function generateContent(){
    const apikey = import.meta.env.VITE_KEY;
    setAnswer("Loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="+apikey,
      method: "post",
      data: {
        contents: [{
          parts: [{
            text: query
          }]
        }],
      },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }

  const handleClear = () => {
    setAnswer([]);
  };

  return (
    <div className='chatbot'>
      <h1>TalkMate A.I. Chat Bot</h1>
      <textarea placeholder='Enter query' onChange={(e)=>setQuery(e.target.value)}/>
      <button className='submit' onClick={generateContent}>Generate</button>
      <button className='cancel' onClick={handleClear}>Clear</button>
      <pre>{answer}</pre>
    </div>
  );
}

export default App
