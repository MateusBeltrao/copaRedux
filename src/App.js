import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux'
import Sidebar from './components/sidebar'
import Page from './components/page'
import './app.css'

  
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar></Sidebar>
          <Page></Page>
        </Provider>
      </div>
    );
  }
}

export default App;
