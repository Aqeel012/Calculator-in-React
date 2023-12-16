import React from 'react';
import './App.css';
 import { Link, Route, Router, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';


function App() {
  return (
    <>
    <div className='nav'>
        <ul>
          <Link className='ulitem' to='calculator'>Calculator</Link>
        </ul>
    </div>
    <Routes>
      <Route path='/calculator' element={<Calculator/>}/>
    </Routes>
    </>
  );
}

export default App;