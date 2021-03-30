import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import WavePanel from './components/wave-panel';

library.add(fab, fas);

function App() {
  return (
    <WavePanel/>
  );
}

export default App;
