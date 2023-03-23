import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import {Contacts} from "./components/Contacts"
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
