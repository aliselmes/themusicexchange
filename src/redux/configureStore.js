import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Items } from './items';
import { Musicians } from './musicians';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        Items: Items,
        Musicians: Musicians
    }), 
    applyMiddleware(thunk, logger)
    )

    return store;

};