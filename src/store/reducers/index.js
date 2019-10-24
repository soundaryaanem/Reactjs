import { combineReducers } from 'redux';

// import booking from './booking';
import taskReducer from "./taskReducer"


const createReducer = (asyncReducers) =>
    combineReducers({
        taskReducer,
        ...asyncReducers
    });

export default createReducer;
