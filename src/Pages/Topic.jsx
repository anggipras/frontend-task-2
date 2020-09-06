import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Header from './../components/Header'

const Topicyos=(props)=>{
  const {match} = props
  return (
      <div style={{backgroundColor:'red'}}>
          MANTAP BRO {match.params.anggi}
      </div>
  )
}

const Topic = (props) => {
    const {match} = props
    return (
      <>
      <Header />
      <div className='row'>
        <div className='col-md-6'>
          <Link to='./wilayah'>
            <button>ke Wilayah</button>
          </Link>
          <Link to={match.path + '/sopo iki'}>
            <button>to Anggi</button>
          </Link>
          <Link to={match.path + '/sopo kuwi'}>
            <button>to Mike</button>
          </Link>
        </div>
        <div className='col-md-6'>
          <Switch>
            <Route exact path={match.path}>
              <div>
                SIAP NDAN!
              </div>
            </Route>
            <Route path={match.path + '/:anggi'} component={Topicyos}/>
          </Switch>
        </div>
      </div>
      </>
    )
  }

export default Topic