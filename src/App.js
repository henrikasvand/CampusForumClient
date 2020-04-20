import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
// import logo from './cup.png';
import './App.css';
import { Home } from './components/Home';
import ForumPage from './components/ForumPage';
import ForumEdit from './components/ForumEdit'
import Meme from './components/Meme';
import Spotify from './components/Spotify';

function App() {
  return (
    <div className="App">
      <Navigation/>
     
      <div className="Content">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/forumPage" exact component={ForumPage}/>
      <Route path="/forumEdit/:id" exact component={ForumEdit}/>
      <Route path="/meme" exact component={Meme}/>
      <Route path="/spotify" exact component={Spotify}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;