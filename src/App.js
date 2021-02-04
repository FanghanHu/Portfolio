import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Works from './pages/works';
import PageNavbar from './components/pageNavbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <PageNavbar pages={[["/", "Works"],["/contact", "Contact"]]}/>
        <Route path="/" exact component={Works}/>
      </Router>
    </Container>
  );
}

export default App;
