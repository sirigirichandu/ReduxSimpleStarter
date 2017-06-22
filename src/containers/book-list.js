import React, { Component } from 'react';
import { connect } from 'react-redux';
//react-redux is a glue between react and redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//bindActionCreators helps us to make sure that action creators will pass thru all reducers

class BookList extends Component{

  renderList(){
    return this.props.books.map( (book) => {
      return(
        <li className="list-group-item" key={book.title}
        onClick={() => this.props.selectBook(book)}> {book.title} </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )

  }
}

//whatever is returned will show as props inside BookList container
//mapStateToProps function is very important and acts as glue between react and redux
function mapStateToProps(state){
  // #1. When ever state changes Component will automatically re-render
  // #2. when ever application state changes, the object in the mapStateToProps will be assigned as props to the component
  return{
    books : state.books
  }
}

//anything returned from mapDispatchToProps will be passed as props to BookList container
//mapDispatchToProps function used to pass action creators to all reducers in the applicaiton
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed thru all reducers in application
  return bindActionCreators({ selectBook : selectBook}, dispatch)
}

//promote BookList from a component to container - it needs to know about this new dispatch method, selectBook.
//Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
