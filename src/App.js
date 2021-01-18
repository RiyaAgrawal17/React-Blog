import React,{Fragment} from "react";
import "./styles.css";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import Latest from './components/Latest';
import Trending from './components/Trending';
import Popular from './components/Popular';
import IndividualPost from './components/IndividualPost';


export default function App() {
  return (

    <Router>
    <div className="App">
      <NavBar />
      <Switch>
          <Fragment>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/Post' component = {Post} />
          <Route exact path = '/Trending' component = {Trending} />
          <Route exact path = '/Latest' component = {Latest} />
          <Route exact path = '/Popular' component = {Popular} />
          <Route path="/Post/:id" exact component={IndividualPost} />
          
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
}
