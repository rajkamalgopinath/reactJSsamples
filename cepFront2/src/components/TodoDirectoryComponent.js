import React, { Component, Link} from 'react';
import  { Redirect,Route , withRouter } from 'react-router-dom'

import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';

import { fetchTodos, deleteTodo } from '../service/Actions';

import TodoEdit from '../components/TodoEditComponent';


class TodoDirectory extends Component {
 
    constructor(props) {
        super(props);
        this.state = {todos: null};
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentWillReceiveProps(newProps) {
        this.setState({todos: newProps.todos});
    }

    handleDelete(todoId) {
   
        var delTodo = deleteTodo(todoId);

        delTodo(todoId).then (res=> {
        
            const todos = this.state.todos;
            alert(todoId);
            this.setState({todos: todos.filter(item => item._id !== todoId)});

            alert(this.state.todos);

        });
    
    }

    render() {

        if(!this.state.todos) {
            return (<div></div>);
        }

        const todo = this.state.todos.map(todo => {
            return (
              
                <div key={todo._id} className="col-md-5 m-1">
                   

                    <Card>
                    <CardBody>
                        <CardTitle>
                            <a href={`/todoEdit/${todo._id}`}>
                                {todo.name}-{todo._id}
                            </a>
                        </CardTitle>
                        <CardText>{todo.description}</CardText>
                        {
                             <Button  onClick={() => this.handleDelete(todo._id)}>Delete</Button>
                        }   
                    </CardBody>
                 </Card>
            </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {todo}
                </div>
            </div>
        );
    }
}

export default withRouter(TodoDirectory);

