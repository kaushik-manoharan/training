import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './components/classComp';

function App() {
  const [st,setSt] = useState({stationStatus: true,serviceStation: 'Meenambakkam, Chennai,TN'})

  
  return (
    <div className="App">
      <header className="App-header">
        <Car properties = {st}/>
      </header>
    </div>
  );
}

export default App;
