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
import HeaderPark from './components/HeaderPark'
import HeaderSpace from './components/HeaderSpace'
import Parkir from './Pages/Parkir'
import Whitespace from './Pages/Whitespace'
import Apizomato from './Pages/Apizomato'
import Notfound from './Pages/notfound'
import axios from 'axios'
import Particles from 'react-particles-js'

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {
  state = {
    token: '',
    dataprovinsi:[]
  }

  componentDidMount() {
    axios.get(`https://x.rajaapi.com/poe`)
    .then((res)=> {
      this.setState({token: res.data.token})
    }).catch((err)=> {
      console.log(err)
    })
  }

  // gantidataprov=(data)=> {
  //   this.setState({dataprovinsi: data})
  // }

  render() {
  if(this.state.token) {
    return (
        <div>
          <Switch>
            <Route exact path='/'>
              <Particles className='particles' params={particleOptions}/>
              <Header />
              <Home />
            </Route>
            <Route exact path='/wilayah'>
              <Particles className='particles' params={particleOptions}/>
              <Header />
              <Product dataToken={this.state.token}/>
            </Route>
            <Route path='/topics' component={Topic} />
              {/* <Topic />
            </Route> */}
            <Route exact path='/parkir'>
              <Particles className='particles' params={particleOptions}/>
              <HeaderPark />
              <Parkir />
            </Route>
            <Route exact path='/whitespace'>
              <Particles className='particles' params={particleOptions}/>
              <HeaderSpace />
              <Whitespace />
            </Route>
            <Route exact path='/apizomato'>
              <Particles className='particles' params={particleOptions}/>
              <Header />
              <Apizomato />
            </Route>
            <Route path='*'>
              <Notfound />
            </Route>
          </Switch>
        </div>
      )
    } else {
      return (<div>Loading..</div>)
    }
  }
}

export default App;