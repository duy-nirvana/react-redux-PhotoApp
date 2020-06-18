import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Redirect, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>

          {/* TODO: Remove after testing */}
          <ul>
            <li><Link to="/photos">Go to photo pages</Link></li>
            <li><Link to="/photos/add">Go to A new photo pages</Link></li>
            <li><Link to="/photos/123">Go to edit photo pages</Link></li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} / >
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
