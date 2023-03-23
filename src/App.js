import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import {Contacts} from "./components/Contacts"
import {Route, HashRouter, Routes} from 'react-router-dom';


function App() {
  return (
    <HashRouter>
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route exact path="about" component={About} />
          <Route exact path="projects" component={Projects} />
          <Route exact path="contact" component={Contacts} />
        </Routes>
    </HashRouter>
  );
}

export default App;
