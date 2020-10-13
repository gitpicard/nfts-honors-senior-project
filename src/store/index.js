import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { initialState } from '../store/state';

const store = createStore(rootReducer, initialState);

export default store;