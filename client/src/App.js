import React from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Title from "./components/Title"
import BookSearch from "./pages/BookSearch";
import BookSaved from "./pages/BookSaved";
import NoMatch from "./pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <Nav/>
      <Title/>
      <Switch>
      <Route path="/" exact component={BookSearch}/>
      <Route path="/saved" exact component={BookSaved}/>
      <Route path="/saved:id" exact component={BookSaved}/>
      <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
