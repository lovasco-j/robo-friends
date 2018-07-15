import { combineReducers } from 'redux';

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';

const initialState = {
    robots: [],
    searchField: '',
};

export const searchRobots = (state = initialState, action= {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateSearch = {
    isPending: false,
    robots: [],
    error: false,
};

export const requestRobots = (state = initialStateSearch, action = {}) => {
    switch( action.type ) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});

        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});

        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const rootReducer = combineReducers({searchRobots, requestRobots});

export default rootReducer;
