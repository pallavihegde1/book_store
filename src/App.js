import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/book_list'
import BookDetail from './containers/book_detail'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BookDetail/>
        <BookList />
      </div>
    );
  }
}

export default App;
