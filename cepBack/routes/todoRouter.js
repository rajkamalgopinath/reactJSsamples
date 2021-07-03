
const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('../models/todo');
const authenticate = require('../authenticate');


const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  

const todoRouter = express.Router();

todoRouter.use(bodyParser.json());

todoRouter.route('/')
.options(cors(corsOptions), authenticate.verifyUser, (req, res, next) => {
    next() 
   .catch(err => next(err));
}) 
.get(cors(corsOptions), authenticate.verifyUser, (req, res, next) => {
    Todo.find()
    .then(todos => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todos);
    })
    .catch(err => next(err));
})  
.post(cors(corsOptions),authenticate.verifyUser,(req, res, next) => {
    Todo.create(req.body)
    .then(todo => {
        console.log('Todo Created ', todo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /todos');
})
.delete(cors(corsOptions),authenticate.verifyUser,(req, res, next) => {
   Todo.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

todoRouter.route('/:todoId')
.options(cors(corsOptions), authenticate.verifyUser, (req, res, next) => {
    next() 
   .catch(err => next(err));
})
.get(cors(corsOptions), authenticate.verifyUser,(req, res, next) => {
    console.log(req.params.todoId)
    Todo.findById(req.params.todoId)
    .then(todo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);

    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /todos/${req.params.todoId}`);
})
.put(cors(corsOptions),authenticate.verifyUser,(req, res, next) => {
    Todo.findByIdAndUpdate(req.params.todoId, {
        $set: req.body
    }, { new: true })
    .then(todo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);
    })
    .catch(err => next(err));           
})
.delete(cors(corsOptions),authenticate.verifyUser,(req, res, next) => {
    Todo.findByIdAndDelete(req.params.todoId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = todoRouter;