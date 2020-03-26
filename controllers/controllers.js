const HttpError = require('../models/http-error');

const Book = require('../models/books');
const Task = require('../models/tasks');

const getBooksAndTasks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find({});
  } catch (err) {

    const error = new HttpError(
      'Error, no books found.',
      500
    );
    return next(error);
  }

  let tasks;
  try {
    tasks = await Task.find({});
  } catch (err) {
    const error = new HttpError(
      'Error, no tasks found.',
      500
    );
    return next(error);
  }


  res.json({ 
    books: books.map(book => book.toObject({ getters: true })), 
    tasks: tasks.map(task => task.toObject({ getters: true }))        
});
};

exports.getBooksAndTasks = getBooksAndTasks;

