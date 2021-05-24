import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyles';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Nav />
    <Route path={['/game/:id', '/']}>
      <Home />
    </Route>
  </div>
);

export default App;
