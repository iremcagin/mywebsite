import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import {Contacts} from "./components/Contacts"
import {Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="about" component={About} />
          <Route exact path="projects" component={Projects} />
          <Route exact path="contact" component={Contacts} />
        </Switch>
    </HashRouter>
  );
}

export default App;
