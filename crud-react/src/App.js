import React from 'react'
import { HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Navbar />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
