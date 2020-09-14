import React, { useState } from 'react';

import "./App.css";
import Slider from './components/organisms/slider';
import Header from './components/organisms/header';
import { Route, Switch } from 'react-router-dom';

import WhoIAm from "./components/templates/whoIAm/whoIAm"
import Projects from "./components/templates/projects/projects"
import Hobbies from "./components/templates/hobbies/hobbies"

export default function App() {
  return (
    <div class="container">
      <Header />
      <Switch>
        <Route exact path="/" component={WhoIAm} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/hobbies" component={Hobbies} />
      </Switch>
    </div>
  )
}