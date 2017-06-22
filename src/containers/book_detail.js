import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.book) return <h3>Please select a book to Display details</h3>
    return(
      <div>
        <h3>Selected Book Details are below </h3>
        <div>Title : {this.props.book.title}</div>
        <div>Pages : {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    book : state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
