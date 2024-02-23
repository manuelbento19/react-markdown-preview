import { useState } from 'react';
import './App.scss';
import ReactMarkdown from 'react-markdown';

function App() {
  const [text,setText] = useState("")

  const onChange = ({target:{value}})=> setText(value); 
  
  return (
    <main>
      <h1>React Markdown Previewer</h1>
      <div id='container'>
        <aside>
          <header>Editor</header>
          <textarea onChange={onChange}></textarea>
        </aside>
        <section>
          <header>Preview</header>
          <ReactMarkdown id="markdown">{text}</ReactMarkdown>
        </section>
      </div>
    </main>
  )
}

export default App
