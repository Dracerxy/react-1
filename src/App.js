import logo from './logo.svg';
import './App.css';
import F1 from './components/F1';
import Nav from './components/Nav'
import {HashRouter,Routes,Route} from "react-router-dom"
import { Home,About, Blog } from './components/F2';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
        <Nav/>
        <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <Contact/>
    </div>
  );
}

export default App;
