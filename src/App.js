import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import JobOpening from './components/pages/JobOpening';
import MoreJobs from './components/pages/MoreJobs';


function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/jobopening' component={JobOpening} />
        <Route path='/MoreJobs' component={MoreJobs} />
       </Switch>
       <Footer />
    </Router>
    </>
  );
}

export default App;
