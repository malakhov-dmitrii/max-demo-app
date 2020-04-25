import React from "react";
import "./App.css";
import PostsList from './PostsList';
import User from './User';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  // создан
  // обновление конкретного свойства
  // размаунт


  return (
    <div className="posts">
      <Router>
        <Switch>
          <Route path="/user/:id" component={User} />
          <Route path="/" component={PostsList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
