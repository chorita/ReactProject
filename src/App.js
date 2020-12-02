import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import JobOpening from './pages/JobOpening';
import MoreJobs from './pages/MoreJobs';
import GoogleJob from './pages/GoogleJob';
import Applied from './pages/Applied';
import IbmJob from './pages/IbmJob';
import LinkedinJob from './pages/LinkedinJob';
import FacebookJob from './pages/FacebookJob';
import JobPosting from './pages/JobPosting';
import FormSuccess from './pages/FormSuccess';
import Contact from './pages/Contact';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import ContactSuccess from './pages/ContactSuccess';

import { useState, useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute';
import auth from './Authentication';
import AdminPage from './pages/AdminPage';
import AdminPostPage from './pages/AdminPostsPage';
import LoginPage from './pages/LoginPage';


function App() {

    let fakePosts = [
      {title: 1, body: 2},
      {title: 1, body: 2},
    ]

    let [posts, setPosts] = useState([]);

    useEffect(() => {
      const fakeApiUrl = 'https://jsonplaceholder.typicode.com/posts';
      
      fetch(fakeApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });

    }, []);


    const removePost = (postId) => {
  
      const newPosts = posts.filter((post, index) => {
        return post.id !== postId;
      });

      setPosts(newPosts, []);
    }

    const editPost = (postId, alteredPost) => {
      const newPosts = posts.map((post, index) => {
        if(post.id == postId){
          return alteredPost;
        }
        return post;
      });

      setPosts(newPosts, []);
    }

    const createPost = (newPost) => {
      posts.push(newPost);
      setPosts(posts, []);
    }

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
        <PrivateRoute path="/admin">
        <AdminPage posts={posts} removePost={removePost} editPost={editPost} createPost={createPost} />
        </PrivateRoute>
        <Route path='/AdminPostPage'> 
          <AdminPostPage posts={posts} removePost={removePost} />
            </Route>
        <Route path='/login' component={LoginPage} />
       </Switch>
       <Footer />
    </Router>
    </>
  );
}

export default App;
