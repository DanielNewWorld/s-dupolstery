import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import servicesItemReducer from './servicesItem-reducer';
import firmReducer from './firm-reducer';
import userReducer from './userItem-reducer';
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    servicesData: servicesItemReducer,
    firmData: firmReducer,
    userData: userReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;