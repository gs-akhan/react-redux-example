import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// Import root reducer

import rootReducer from "./reducers/index";

const defaultState = {
    posts : [],
    comments : []
}


const store = createStore(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;