import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//combineReducer gonna add a key to the global application state
const rootReducer = combineReducers({
  books : BooksReducer,
  activeBook : ActiveBook
});

export default rootReducer;
