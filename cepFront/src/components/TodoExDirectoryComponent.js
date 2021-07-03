import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import TodoExInfo from './TodoExInfoComponent'

class TodoExDirectory extends Component {
    constructor(props) {
        super(props);
      
    }

 

    render() {
        const todo = this.props.todos.todos.map(todo => {
            return (
                <div key={todo._id} className="col-md-4 m-2">
                    <Card>
                        <CardBody>
                            <CardTitle>{todo.name}</CardTitle>
                            <CardText>{todo.description}</CardText>
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

export default TodoExDirectory;