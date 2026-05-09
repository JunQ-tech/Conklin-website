import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Staff from './pages/Staff';
import GodsCloset from './pages/GodsCloset';
import BibleStudy from './pages/BibleStudy';
import Events from './pages/Events';
import PrayerRequest from './pages/PrayerRequest';
import Ministries from './pages/Ministries';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/gods-closet" element={<GodsCloset />} />
        <Route path="/bible-study" element={<BibleStudy />} />
        <Route path="/event" element={<Events />} />
        <Route path="/prayer" element={<PrayerRequest />} />
        <Route path="/ministries" element={<Ministries />} />
      </Routes>
    </Router>
  );
}

export default App;
