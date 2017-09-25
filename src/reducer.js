import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';


function mainReducer(state = {
  tables: [],

}, action) {
    switch (action.type) {

    case 'REQUEST_TABLE':
    console.log(action);
        return Object.assign({}, state, {
          tables: [
            ...state.tables,
            action.tables,
          ]
        });

    case 'ADD_TABLE':
        return Object.assign({}, state, {

          tables: [
            ...state.addTable,
            action.addTable,
          ]
        })
    default:
        return state;
    }
}


const reducer = combineReducers({
    main: mainReducer,
    form: formReducer,
});

export default reducer;
