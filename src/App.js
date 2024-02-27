import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/DashBoard.jsx';
import Users from './components/Users.jsx';
import Inventory from './components/Inventory.jsx';
import './App.css';

function App() {
  return (
    <Router>
        <div className='app'>
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Inventory" element={<Inventory />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
