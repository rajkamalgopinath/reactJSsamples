import * as ActionTypes from './ActionTypes';

export const Todo = (state = {
        isLoading: true,
        errMess: null,
        todo: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {...state, isLoading: false, errMess: null, todo: action.payload};
        case ActionTypes.TODO_LOADING:
            return {...state, isLoading: true, errMess: null, todo: action.payload};
         case ActionTypes.TODO_FAILED:
           return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};