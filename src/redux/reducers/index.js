import {combineReducers} from 'redux'
import AngkaReducer from './AngkaReducer'
import ParkReducers from './ParkReducers'
import JamReducers from './JamReducers'
import WordsReducers from './WordsReducers'

const reducers = combineReducers({
    angka:AngkaReducer,
    park:ParkReducers,
    thetime:JamReducers,
    thewords:WordsReducers
  })

export default reducers