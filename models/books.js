const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {type:String, required:true},
    image: {type: String, required: false},
    grade: {type: Number, required: true}
})

bookSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Book', bookSchema);