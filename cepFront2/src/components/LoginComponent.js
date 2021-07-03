import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

import { postLogin } from '../service/Actions';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            touched: {
                username: false,
                password: false
            }
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(username, password) {

        const errors = {
            username: '',
            password: ''
        };

        if (this.state.touched.username) {
            if (username.length < 2) {
                errors.username = 'User name must be at least 2 characters.';
            } else if (username.length > 15) {
                errors.username = 'User name must be 15 or less characters.';
            }
        }

       
        if (this.state.touched.password) {
            if (password.length < 2) {
                errors.password = 'Password must be at least 2 characters.';
            } else if (username.length > 15) {
                errors.username = 'Password must be 15 or less characters.';
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

        var values = {username: this.state.username, password: this.state.password};

        var login = postLogin(values);

        login();

    }

    render() {

        const errors = this.validate(this.state.username, this.state.password);

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Login</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Login</h2>
                        <hr />
                    </div>
                </div>

                
                <div className="row row-content">
                 
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="username" md={2}>User Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="username" name="username"
                                        placeholder="User Name"
                                        value={this.state.username}
                                        invalid={errors.username}
                                        onBlur={this.handleBlur("username")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.username}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Input type="text" id="password" name="password"
                                        placeholder="password"
                                        value={this.state.password}
                                        invalid={errors.password}
                                        onBlur={this.handleBlur("password")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Login
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

export default Login;

