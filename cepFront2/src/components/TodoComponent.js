import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link  } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

import { postTodo } from '../service/Actions';


const history1 = createBrowserHistory({forceRefresh:true});

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _id: 0,
            name: '',
            description: '',
            touched: {
                username: false,
                password: false
            }
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    redirect() {
       history1.push("/todo");
    }

    validate(name, description) {

        const errors = {
            name: '',
            description: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'Name must be at least 2 characters.';
            } else if (name.length > 15) {
                errors.name = 'Name must be 15 or less characters.';
            }
        }

       
        if (this.state.touched.description) {
            if (description.length < 2) {
                errors.description = 'Description must be at least 2 characters.';
            } else if (description.length > 15) {
                errors.description = 'Description must be 15 or less characters.';
            }
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
       
        event.preventDefault();

        var values = {
                    name: this.state.name, 
                    description: this.state.description
                }
           
        var addTodo = postTodo(values);

        addTodo(values);

        this.redirect();
    }

    render() {

        const errors = this.validate(this.state.name, this.state.description);

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Add</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Todo</h2>
                        <hr />
                    </div>
                </div>

                
                <div className="row row-content">
                 
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="name"
                                        value={this.state.name}
                                        invalid={errors.name}
                                        onBlur={this.handleBlur("name")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="description" md={2}>Description</Label>
                                <Col md={10}>
                                    <Input type="text" id="description" name="description"
                                        placeholder="description"
                                        value={this.state.description}
                                        invalid={errors.description}
                                        onBlur={this.handleBlur("description")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.description}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Add Todo
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Todo);
