import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Books from './components/Books';
import Authors from './components/Authors';
import Navbar from './components/Navbar';

//Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='App' id='main'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route path='/' exact component={Books} />
                <Route path='/authors' exact component={Authors} />
              </Switch>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
