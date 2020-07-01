import {
    createStore,
    applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

const logger = createLogger({
    collapsed: true,
    //
});

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
);

export default store;
