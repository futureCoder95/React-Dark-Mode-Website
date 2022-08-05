import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        {/* <Contact/> */}
        <Route exact path='/service' component={Services} />
      </Switch>
    </>
  )
}

export default App;
