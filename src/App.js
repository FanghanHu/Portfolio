import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Works from './pages/works';
import Contact from "./pages/contact";
import PageNavbar from './components/pageNavbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {
  return (
    <Container fluid className="p-0">
      <Router basename={process.env.PUBLIC_URL}>
        <PageNavbar pages={[["/", "Works"],["/contact", "Contact"]]}/>
        <Route path="/" exact component={Works}/>
        <Route path="/contact" exact component={Contact}/>
      </Router>
    </Container>
  );
}

export default App;
