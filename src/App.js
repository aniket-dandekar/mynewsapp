// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  // newsappkey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 50
  }
  changeProgress = (load) =>{
    this.setState({
      progress : load
    })
  }
  articles = 30
  render() {
    return (
      <div>
      <Router>
      <Navbar /> 
      <LoadingBar 
      color='#f11946'
      progress={this.state.progress}
      height={3}
      />
        <Routes>
        <Route exact path="/" element={
            <News cProgress={this.changeProgress} key="general" totArticls={this.articles} country="in" category="general" apikey="f450353493e64eba9154ae9b7cd9bf7f"/>
        } />
        <Route exact path="/business" element={
            <News cProgress={this.changeProgress} key="business" totArticls={this.articles} country="in" category="business" apikey="f450353493e64eba9154ae9b7cd9bf7f"/>
        } />
        <Route exact path="/entertainment" element={
            <News cProgress={this.changeProgress} key="entertainment" totArticls={this.articles} country="in" category="entertainment" apikey="f450353493e64eba9154ae9b7cd9bf7f"/>
        } />
        <Route exact path="/health" element={
            <News cProgress={this.changeProgress} key="health" totArticls={this.articles} country="in" category="health" apikey="f450353493e64eba9154ae9b7cd9bf7f"/>
        } />
        <Route exact path="/science" element={
            <News cProgress={this.changeProgress} key="science" totArticls={this.articles} country="in" category="science" apikey="f450353493e64eba9154ae9b7cd9bf7f"/>
        } />
        <Route exact path="/sports" element={
            <News cProgress={this.changeProgress} key="sports" totArticls={this.articles} country="in" category="sports" apikey="f450353493e64eba9154ae9b7cd9bf7f"/>
        } />
        <Route exact path="/technology" element={
            <News cProgress={this.changeProgress} key="technology" totArticls={this.articles} country="in" category="technology" apikey="f450353493e64eba9154ae9b7cd9bf7f"/>
        } />
 
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;
