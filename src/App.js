import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Jokes from './pages/Jokes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jokes' element={<Jokes />} />
      </Routes>
    </Router>
  );
}

export default App;
