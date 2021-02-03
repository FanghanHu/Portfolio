import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Works from './pages/works';

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <Route path="/" component={Works}/>
      </Router>
    </Container>
  );
}

export default App;
