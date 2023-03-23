import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import {Contact} from "./components/Contact.js"
import { BrowserRouter, Routes ,Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
