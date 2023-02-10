
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Component/landingPage';
import { useState } from 'react';
import HomePage from './Component/homePage';

function App() {

  const [singleProfile, setSingleProfile] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage setSingleProfile={setSingleProfile} />} />
        <Route exact path="/homePage" element={<HomePage singleProfile={singleProfile} />} />


      </Routes>
    </Router>

  );
}

export default App;
