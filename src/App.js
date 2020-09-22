import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './components/classComp';
import Home from './components/components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [st,setSt] = useState({stationStatus: true,serviceStation: 'Meenambakkam, Chennai,TN'})

  
  return (
    // <div className="App">
    //   <header className="App-header">
        // {/* <Car properties = {st}/> */}
        <Home/>
    //   </header>
    // </div>
  );
}

export default App;
