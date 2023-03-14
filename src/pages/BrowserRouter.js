import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignInSide from './SignInSide';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignInSide} />
      <Route path="/sign-up" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;
