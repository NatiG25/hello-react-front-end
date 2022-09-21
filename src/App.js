import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Hello World!</h1>
        <Link to='greeting'>greeting</Link>
        <Routes>
          <Route path='/greeting' element={<Greeting />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
