import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Homepage from './Pages/Homepage';
import AlabayHeritageGame from './Pages/AlabayHeritageGame';
import AlabayGuardianGame from './Pages/AlabayGuardianGame';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/alabay-heritage-game" element={<AlabayHeritageGame />} />
          <Route path="/alabay-guardian-game" element={<AlabayGuardianGame />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
