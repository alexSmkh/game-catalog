import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Route path={['/game/:id', '/']}>
      <Home />
    </Route>
  </div>
);

export default App;
