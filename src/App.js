import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import {Contact} from "./components/Contact.js"
import {Routes ,Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={<Home />}/>
        <Route exact path="about" component={<About />} />
        <Route exact path="projects" component={<Projects />} />
        <Route exact path="contact" component={<Contact />} />
    </HashRouter>
  );
}

export default App;
