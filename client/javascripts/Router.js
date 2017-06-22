import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import HomePage from './components/HomePage';

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Route exact path="/" component={HomePage} />
      </App>
    </BrowserRouter>
  );
}