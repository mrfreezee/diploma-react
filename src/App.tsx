import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Main } from './components/Main/Main';
import { SideBar } from './components/SideBar/SideBar';

function App() {
  return (
    <div className='app'>
        <SideBar/>
        <Main/>
    </div>
  );
}

export default App;
