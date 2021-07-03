import * as ActionTypes from './ActionTypes';

export const Todos = (state = {
        isLoading: true,
        errMess: null,
        todos: []
    }, action) => {
    switch (action.type) {
       case ActionTypes.ADD_TODOS:
            return {...state, isLoading: false, errMess: null, todos: action.payload};
       case ActionTypes.TODOS_LOADING:
            return {...state, isLoading: true, errMess: null, todos: []};
       case ActionTypes.TODOS_FAILED:
           return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};