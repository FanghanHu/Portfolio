import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {
  return (
    <Container fluid className="p-0">
      <Router basename={process.env.PUBLIC_URL}>
        
      </Router>
    </Container>
  );
}

export default App;
