import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

function App() {
  const [text,setText] = useState("")

  const onChange = ({target:{value}})=> setText(value); 
  
  return (
    <main>
      <h1>React Markdown Previewer</h1>
      <aside>
        <textarea name="" id="" cols="80" rows="20" onChange={onChange}></textarea>
      </aside>
      <section>
        <ReactMarkdown>{text}</ReactMarkdown>
      </section>
    </main>
  )
}

export default App
