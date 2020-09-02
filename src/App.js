import React from 'react';
import Home from './Pages/Home'
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Topic from './Pages/Topic'
import Product from './Pages/Product'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/product'>
              <Product />
            </Route>
            <Route exact path='/topics'>
              <Topic />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;