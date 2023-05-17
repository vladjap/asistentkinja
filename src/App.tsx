import { useState } from 'react'
import 'normalize.css';
import './App.css'
import Header from "./components/Header/Header";
import ContentGallery from "./components/ContentGallery";
import HalfSplitedContainer from "./components/HalfSplitedContainer/HalfSplitedContainer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header />
        <ContentGallery />
        {/*<HalfSplitedContainer*/}
        {/*    ComponentLeft={<Left />}*/}
        {/*    ComponentRight={<Right />}*/}
        {/*/>*/}
        <div style={{ height: '600px', backgroundColor: 'blue'}}>test</div>
    </div>
  )
}

export default App
