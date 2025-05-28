import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  
  async function generateContent(){
    setAnswer("Loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=process.env.REACT_APP_API_KEY",
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

  return (
    <div className='chatbot'>
      <h1>TalkMate A.I. Chat Bot</h1>
      
        <textarea placeholder='Enter query' onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={generateContent}>Generate Answer</button>
      
      <pre>{answer}</pre>
    </div>
  );
}

export default App
