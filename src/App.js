import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './components/classComp';
import Home from './components/Winterhold';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,  Route,  Switch} from 'react-router-dom';
import Schools from './components/Winterhold/schools';
import Courses from './components/Winterhold/courses';
import Faculty from './components/Winterhold/faculty';
import Homepage from './components/Winterhold/home';

function App() {
  const [st,setSt] = useState({stationStatus: true,serviceStation: 'Meenambakkam, Chennai,TN'})

  
  return (
    // <div className="App">
    //   <header className="App-header">
        // {/* <Car properties = {st}/> */}
    //   </header>
    // </div>
    <Router>
      <Switch>

       <Route exact path='/' ><Homepage/></Route>
       <Route path='/courses'><Courses/></Route>
       <Route path='/school/:id'><Schools/></Route>
       <Route path='/faculty'><Faculty/></Route>
       </Switch>
    </Router>
  );
}

export default App;
