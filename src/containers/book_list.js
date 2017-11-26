import React, {Component} from 'react';
import {connect} from 'react-redux';
import { SelectBook } from '../actions/index';
// to ensure that the action creator binds throgh all reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  render(){

    const BookListArray = this.props.books.map((book,index) => (
      <li  onClick = {() => this.props.selectedBook(book)} key={index} > { book.title} </li>
   ));

    return(
        <ul>
            {BookListArray}
        </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned here is shown as props inside the defining component i.e BookList
  //    // whenever this state changes the container is re-rendered and the new state  will assigned as props
  return {
    books: state.books
  };
}

// anything return from this function will props to booklist container
function mapDispatchToProps(dispatch){
  // whenever select book is called , result should be passed to all of our reducers throgh the dispatch function
  return bindActionCreators({selectedBook: SelectBook}, dispatch)
}


export default  connect(mapStateToProps, mapDispatchToProps)(BookList); // export the container like this
