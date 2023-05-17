import 'normalize.css';
import './App.css'
import Header from "./components/Header/Header";
import ContentGallery from "./components/ContentGallery";

function App() {
  return (
    <div>
        <Header />
        <ContentGallery />
        <div style={{ height: '600px', backgroundColor: 'blue'}}>test</div>
    </div>
  )
}

export default App
