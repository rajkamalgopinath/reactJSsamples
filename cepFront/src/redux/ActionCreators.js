import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const fetchTodos = () => dispatch => {
    dispatch(todosLoading());
    let auth =  localStorage.getItem('token');
            return fetch(baseUrl + 'todos', {
                method: 'GET',
                credentials:'omit',
                mode: 'cors',
                headers:{
                'Access-Control-Allow-Origin':'http://localhost:8080',
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + auth
                },
              })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error from payload ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())  
        .then(todos => dispatch(addTodos(todos)))
        .catch(error => dispatch(todosFailed(error.message)));
};

export const todosLoading = () => ({
    type: ActionTypes.TODOS_LOADING
});



export const todosFailed = errMess => ({
    type: ActionTypes.TODOS_FAILED,
    payload: errMess
});

export const addTodos = todos => ({
    type: ActionTypes.ADD_TODOS,
    payload: todos
});

export const deleteTodo = (id) => dispatch => {
    alert('delete' + id);
    let auth =  localStorage.getItem('token');

            return fetch(baseUrl + 'todos/' + id, {
                method: 'DELETE',
                credentials:'omit',
                mode: 'cors',
                headers:{
                'Access-Control-Allow-Origin':'http://localhost:8080',
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + auth
                },
              })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                   
                    const error = new Error(`Error from payload ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                alert(error.message);
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())  
        .catch(error => dispatch(todoFailed(error.message)));
};



export const fetchTodo = (id) => dispatch => {
    dispatch(todoLoading());
    let auth =  localStorage.getItem('token');
            return fetch(baseUrl + 'todos/' + id, {
                method: 'GET',
                credentials:'omit',
                mode: 'cors',
                headers:{
                'Access-Control-Allow-Origin':'http://localhost:8080',
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + auth
                },
              })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                   
                    const error = new Error(`Error from payload ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())  
        .then(todo => dispatch(addTodo(todo)))
        .catch(error => dispatch(todoFailed(error.message)));
};


export const fetchTodoEx = (id) => {
    let auth =  localStorage.getItem('token');
            return fetch(baseUrl + 'todos/' + id, {
                method: 'GET',
                credentials:'omit',
                mode: 'cors',
                headers:{
                'Access-Control-Allow-Origin':'http://localhost:8080',
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + auth
                },
              })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    alert('Error 1 ' + error.message);
                    const error = new Error(`Error from payload ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                alert('Error 1 ' + error.message);
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())  
        .then(todo => addTodo(todo))
        .catch(error => todoFailed(error.message));
};



export const addTodo = todo => ({
    type: ActionTypes.ADD_TODO,
    payload: todo
});

export const todoLoading = () => ({
    type: ActionTypes.TODO_LOADING
});


export const todoFailed = errMess => ({
    type: ActionTypes.TODO_FAILED,
    payload: errMess
});

export const postFeedback = (feedback) => () => {
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
          "Content-Type": "application/json"
        },
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => { 
            console.log('Feedback: ', response); 
            alert('Thank you for your feedback!\n' + JSON.stringify(response));
        })
        .catch(error =>  { 
            console.log('Feedback: ', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};

export const postLogin = (login) => () => {
    
    return fetch(baseUrl + 'users/login', {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json"
        },
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => { 
            console.log('Login: ', response); 
            localStorage.setItem('token', response.token);
            alert('Thank you for logging successsfully!\n' + JSON.stringify(response));
        })
        .catch(error =>  { 
            console.log('Login: ', error.message);
            alert('Login failed : ' + error.message);
        });
};


export const postTodo = (todo) => () => {
    let auth =  localStorage.getItem('token');
    return fetch(baseUrl + 'todos', {
        method: "POST",
            credentials:'omit',
            mode: 'cors',
            headers:{
            'Access-Control-Allow-Origin':'http://localhost:8080',
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + auth
            },
        body: JSON.stringify(todo),
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => { 
            alert('Thank you for adding todo!\n' + JSON.stringify(response));
        })
        .catch(error =>  { 
            console.log('Todo: ', error.message);
            alert('Todo failed : ' + error.message);
        });
};

export const postTodoEdit = (todo) => () => {
    let auth =  localStorage.getItem('token');
    alert(todo);
    return fetch(baseUrl + 'todos/'+todo._id, {
        method: "PUT",
            credentials:'omit',
            mode: 'cors',
            headers:{
            'Access-Control-Allow-Origin':'http://localhost:8080',
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + auth
            },
        body: JSON.stringify(todo),
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => { 
            alert('Thank you for adding todo!\n' + JSON.stringify(response));
        })
        .catch(error =>  { 
            console.log('Todo: ', error.message);
            alert('Todo failed : ' + error.message);
        });
};