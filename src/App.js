import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home'
import Repo from './components/Repo'

function App() {
  return (
    <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/repository/:username' exact component={Repo} />
    </BrowserRouter>
  );
}

export default App;
