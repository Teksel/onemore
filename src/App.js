import React, { Component } from 'react';
import './App.css';
import ProfilePage from './ProfilePage';
import DialogsPage from './DialogsPage';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/ProfilePage" component={ProfilePage} />
        <Route exact path="/DialogsPage" component={DialogsPage} />
        
     </div>
     </BrowserRouter>
    );
  }
}


export default App;
