import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Main from './components/MainComponent';
import './App.css';



//const store = ConfigureStore();

class App extends Component {
    render() {
        return (
              <div className="App">
                <Main />
              </div>
        );
    };
}

export default App;