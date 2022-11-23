import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jokes from './pages/Jokes';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/jokes' element={<Jokes />} />
    </Routes>
  );
}

export default App;
