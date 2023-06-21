import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import MissionList from './components/mission/MissionList';
import Rockets from './pages/Rockets';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<MissionList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
