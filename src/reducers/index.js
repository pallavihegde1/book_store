import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBookReducer from './reducer_active_book'
// import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  books: BooksReducer ,// this adds a node called books with value of booksReducer to the global app state
  activeBook: ActiveBookReducer
});

export default rootReducer;
