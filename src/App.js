import React, { useState } from 'react';

import "./App.css";
import Slider from './components/organisms/slider';
import Header from './components/organisms/header';

export default function App() {
  return (
    <div class="container">
      <Header />
      <Slider />
    </div>
  )
}