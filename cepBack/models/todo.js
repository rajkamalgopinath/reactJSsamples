const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    /*,
    author: {
        type: String,
        required: true
    }*/
}, {
    timestamps: true
});

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;
