import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Predict from './pages/Predict/Predict';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/predict' element={<Predict />} />
    </Routes>
  );
}

export default App;
