import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import counter from './counter'
import user from './user'

export default createStore(
    combineReducers({ counter,user }),
    applyMiddleware(thunk,logger)
)