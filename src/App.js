import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import Header from './components/organisms/header/header';
import WhoIAm from "./components/templates/whoIAm/whoIAm"
import Projects from "./components/templates/projects/projects"
import Hobbies from "./components/templates/hobbies/hobbies"

export default function App() {

  const [prova, setProva] = useState("");

  const chiudiNav = function () {
    setProva("mobile-nav-active")
  }



  return (
    <div class="container" onClick={chiudiNav}>
      <Header nome={prova} />
      <Switch>
        <Route exact path="/tomas-avila-portfolio" component={WhoIAm} />
        <Route path="/projects" component={Projects} />
        <Route path="/hobbies" component={Hobbies} />
      </Switch>
    </div>
  )
}