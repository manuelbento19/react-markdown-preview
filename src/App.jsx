import { useState } from 'react';
import './App.scss';
import {Container} from './components/Container';
import { Markdown } from './components/Markdown';

function App() {
  const [text,setText] = useState("")

  const onChange = ({target:{value}})=> setText(value); 
  
  return (
    <main>
      <h1>React Markdown Previewer</h1>
      <Container.Root>
        <Container.Card title="Editor">
          <Markdown.Editor edit={onChange}/>
        </Container.Card>
        <Container.Card title="Preview">
          <Markdown.Preview text={text}/>
        </Container.Card>
      </Container.Root>
    </main>
  )
}

export default App
