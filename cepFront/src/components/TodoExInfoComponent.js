import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class TodoExInfo extends Component {

    renderTodo(todo) {
        return (
            <div className="col-md-1 m-1">
                <Card>
                   <CardBody>
                        <CardTitle>{todo.name}</CardTitle>
                        <CardText>{todo.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

   

    render() {
        if (this.props.todo) {
            return (
                <div className="row">
                    {this.renderTodo(this.props.todo)}
                </div>
            );
        }
        return <div />;
    }
}

export default TodoExInfo;