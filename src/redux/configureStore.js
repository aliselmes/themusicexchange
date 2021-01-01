import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Items } from './items';
import { Musicians } from './musicians';
import { Instructors } from './instructors';
import { Gigs } from './gigs';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        Items: Items,
        Musicians: Musicians,
        Instructors: Instructors,
        Gigs: Gigs
    }), 
    applyMiddleware(thunk, logger)
    )

    return store;

};