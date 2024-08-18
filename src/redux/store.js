import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';

// action creators 
export const deletePost = payload => ({ type: 'DELETE_POST', payload});
export const addPost = payload => ({ type: 'ADD_POST', payload });

const subreducers = {
    posts: postsReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;