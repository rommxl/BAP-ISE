import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard/>}/>
          </Routes>
      </Router>
    </div>
  )
}
