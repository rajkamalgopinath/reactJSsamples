import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Login from './LoginComponent';
import TodoDirectory from './TodoDirectoryComponent';
import TodoExDirectory from './TodoExDirectoryComponent';
import Todo from './TodoComponent'
import TodoEdit from './TodoEditComponent'

import {fetchTodos, fetchTodo, fetchTodoEx, deleteTodo, postFeedback, postLogin, postTodo, postTodoEdit } from '../redux/ActionCreators';
import { resetSection } from 'redux-form';

const mapStateToProps = state => {
    return {
        postTodo: todo => (postTodo(todo)),
        postTodoEdit: todo => (postTodoEdit(todo)),
        postFeedback: feedback => (postFeedback(feedback)),
        postLogin: login => (postLogin(login)),
        todos: state.todos,
        todo: state.todo
    };
};

const mapDispatchToProps =  {
    fetchTodos: () => (fetchTodos()),
    fetchTodo: (id) => (fetchTodo(id)),
    deleteTodo: (id) => deleteTodo(id),
    postTodo: todo => (postTodo(todo)),
    resetTodoForm: () => (actions.reset('todoForm')),
    postTodoEdit: todo => (postTodoEdit(todo)),
    loadTodoEditForm: (todo) => {
         return (actions.load('todoEditForm', {name: todo.name, description: todo.description}));
    },
    resetTodoEditForm: () => (actions.reset('todoEditForm')),
    postFeedback: feedback => (postFeedback(feedback)),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    postLogin: login => (postLogin(login)),
    resetLoginForm: () => (actions.reset('loginForm'))
};


class Main extends Component {

    componentDidMount() {
       this.props.fetchTodos();
    }
  
    render() {
    
    
    const HomePage = () => {
        return (
            <Home />
        );
    }


        return (
           <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route path='/todo' render={() => <TodoDirectory todos={this.props.todos} deleteTodo={this.props.deleteTodo} />} />
                    <Route path='/todoex' render={() => <TodoExDirectory todos={this.props.todos} />} />
                    <Route exact path='/todoEdit/:id' render={(props) => <TodoEdit id={props.match.params.id} todo={this.props.todo} fetchTodo={this.props.fetchTodo}   postTodoEdit={this.props.postTodoEdit} loadTodoEditForm={this.props.loadTodoEditForm}  resetTodoEditForm={this.props.resetTodoEditForm} /> } />
                    <Route exact path='/todoAdd' render={() => <Todo postTodo={this.props.postTodo} resetTodoForm={this.props.resetTodoForm} /> } />
                    <Route exact path='/login' render={() => <Login postLogin={this.props.postLogin} resetLoginForm={this.props.resetLoginForm} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
    
