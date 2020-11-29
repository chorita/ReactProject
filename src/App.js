import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import JobOpening from './components/pages/JobOpening';
import MoreJobs from './components/pages/MoreJobs';
import GoogleJob from './components/pages/GoogleJob';
import Applied from './components/pages/Applied';
import IbmJob from './components/pages/IbmJob';
import LinkedinJob from './components/pages/LinkedinJob';
import FacebookJob from './components/pages/FacebookJob';
import JobPosting from './components/pages/JobPosting';
import FormSuccess from './components/pages/FormSuccess';
import Contact from './components/pages/Contact';
import Article1 from './components/pages/Article1';
import Article2 from './components/pages/Article2';
import Article3 from './components/pages/Article3';
import ContactSuccess from './components/pages/ContactSuccess';


function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/jobopening' component={JobOpening} />
        <Route path='/MoreJobs' component={MoreJobs} />
        <Route path='/GoogleJob' component={GoogleJob} />
        <Route path='/Applied' component={Applied} />
        <Route path='/IbmJob' component={IbmJob} />
        <Route path='/LinkedinJob' component={LinkedinJob} />
        <Route path='/FacebookJob' component={FacebookJob} />
        <Route path='/JobPosting' component={JobPosting} />
        <Route path='/FormSuccess' component={FormSuccess} />
        <Route path='/Contact' component={Contact} />
        <Route path='/ContactSuccess' component={ContactSuccess} />
        <Route path='/Article1' component={Article1} />
        <Route path='/Article2' component={Article2} />
        <Route path='/Article3' component={Article3} />
       </Switch>
       <Footer />
    </Router>
    </>
  );
}

export default App;
