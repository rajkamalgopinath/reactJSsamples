import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Todos } from './todos';
import { Todo } from './todo';


export const InitialFeedback = {
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};

export const InitialLogin = {
    username: '',
    password: ''
};


export const InitialTodo = {
    todo: { name: '',
    description: ''}
};


var InitialTodoEdit = {
    name: '',
    description: ''
};

function updateInitialValues(a,b)
{

    InitialTodoEdit.name=a;
    InitialTodoEdit.description=b;

    return InitialTodoEdit;
}

export const ConfigureStore = () => {

    
     const store = createStore(
       combineReducers({
            todos: Todos,
            todo: Todo,
            ...createForms({
                feedbackForm: InitialFeedback
            }),
            ...createForms({
                loginForm: InitialLogin
            }),
            ...createForms({
                todoForm: InitialTodo
            }),
            ...createForms({
                todoEditForm:   InitialTodoEdit
            })
        }),
        applyMiddleware(thunk, logger)
    );

    //Math.random().toString(36).substring(7)  ,"a2"
    return store;
};