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
import Todo from './TodoComponent'
import TodoEdit from './TodoEditComponent'


import {fetchTodos, fetchTodo, fetchTodoEx, deleteTodo, postFeedback, postLogin, postTodo, postTodoEdit } from '../service/Actions';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        fetchTodos().then(res => {  
            this.setState({todos: res});
        });
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
                    <Route exact path='/login' render={() => <Login  /> } />
                    <Route exact path='/todo' render={() => <TodoDirectory todos={this.state.todos}  /> } />
                    <Route exact path='/todoEdit/:id' render={(props) => <TodoEdit id={props.match.params.id} /> } />
                    <Route exact path='/todoAdd' render={() => <Todo /> } />
                    </Switch>
                <Footer/>
            </div>
        );
    };
}

export default Main;
    
