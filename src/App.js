import React from 'react';
import Home from './Pages/Home'
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'
import Topic from './Pages/Topic'
import Product from './Pages/Product'
import Header from './components/Header'
import Notfound from './Pages/notfound'

class App extends React.Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Home />
            </Route>
            <Route exact path='/product'>
              <Header />
              <Product />
            </Route>
            <Route path='/topics' component={Topic} />
              {/* <Topic />
            </Route> */}
            <Route path='*'>
              <Notfound />
            </Route>
          </Switch>
        </div>
    )
  }
}

export default App;