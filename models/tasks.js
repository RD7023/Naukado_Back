const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    book: {type:String, required:true},
    number: {type: Number, required: true},
    task: {type: String, required: true},
    video: {type: String, required: true},
    answer: {type: String, required: true}
})

taskSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Task', taskSchema);