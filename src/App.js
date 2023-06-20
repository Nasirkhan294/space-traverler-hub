import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Rockets from './pages/Rockets';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
