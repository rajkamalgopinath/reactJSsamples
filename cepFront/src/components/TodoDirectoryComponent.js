import React, { Component, Link } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom'

import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Loading } from './LoadingComponent';

function onTodoSelect(todo) {
    this.setState({ selectedTodo: todo });
}




function TodoDirectory(props) {
    function handleDelete(props, todoId) {

        props.deleteTodo(todoId).then(res => {

            alert('Deleted');
            props.history.push("/");
        });



    }


    const todo = props.todos.todos.map(todo => {
        return (
            <div key={todo._id} className="col-md-4 m-2">
                <Card>

                    <CardBody>
                        <CardTitle>
                            <a href={`/todoEdit/${todo._id}`}>
                                {todo.name}-{todo._id}
                            </a>
                        </CardTitle>
                        <CardText>{todo.description}</CardText>

                        {/*  <a href={`/todoDelete/${todo._id}`} > 
                                         Delete
                                </a>
                            */}
                        {
                            <Button onClick={() => handleDelete(props, todo._id)}>Delete</Button>
                        }
                    </CardBody>
                </Card>


            </div>


        );
    });

    if (props.todos.todoLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.todos.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.todos.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Todo</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {todo}
            </div>
        </div>
    );
}

export default withRouter(TodoDirectory);

