import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import {Contacts} from "./components/Contacts.js"
import {Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
        <Route path="/" component={Home}/>
        <Route path="about" component={About} />
        <Route path="projects" component={Projects} />
        <Route path="contact" component={Contacts} />
    </HashRouter>
  );
}

export default App;
