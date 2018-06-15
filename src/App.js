import React, { Component } from 'react';
import './App.css';
import { Route, Link, HashRouter } from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList';

import { AppProvider } from './AppContext';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <HashRouter >
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <Link to={'/'} className="navbar-brand" >Phonebook App</Link>
              </div>

              <ul className="nav navbar-nav">
                <li><Link to={'/add-contact'}>New contact</Link></li>
                <li><Link to={'/contact-list'}>View all contacts</Link></li>
              </ul>
            </nav>

            <div>
              <Route path="/" exact render={() => <h1>You are home!</h1>} />
              <Route path="/add-contact" component={AddContact} />
              <Route path="/contact-list" component={ContactList} />
            </div>
          </div>
        </HashRouter>
      </AppProvider>
    );
  }
}

export default App;
