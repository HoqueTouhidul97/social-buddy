import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Interface from './Component/Interface/Interface';
import PostDetails from './Component/PostDetails/PostDetails';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/interface'>
          <Interface></Interface>
        </Route>
        <Route path='/post/:postId'>
          <PostDetails></PostDetails>
        </Route>
        <Route exact path="/">
            <Interface></Interface>
          </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
