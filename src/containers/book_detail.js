import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render(){
    if (!this.props.book){
      return <div> Select a Book to get Started </div>
    }
    return(
      <div>
         <h3> Details for {this.props.book.title} </h3>
         <span> Pages: {this.props.book.pages} </span>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // whatever is returned here is shown as props inside the defining component i.e BookList
  //    // whenever this state changes the container is re-rendered and the new state  will assigned as props
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
