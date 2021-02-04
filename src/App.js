import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import Works from './pages/works';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

library.add(fab, fas);

function App() {

  const [activePage, setActivePage] = useState("works");

  return (
    <Container fluid className="p-0">
      <Router>
      <ul className="page-navbar">
        <li 
        className={(activePage === "works")?"page-nav active":"page-nav"}
        onClick={() => {setActivePage("works")}}
        >
          <Link to="/">Works</Link>
        </li>
        <li 
        className={(activePage === "contact")?"page-nav active":"page-nav"}
        onClick={() => {setActivePage("contact")}}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
        <Route path="/" exact component={Works}/>
      </Router>
    </Container>
  );
}

export default App;
