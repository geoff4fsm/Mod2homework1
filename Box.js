import React, { Component } from 'react';

export default class Box extends Component {
  
  render() {
    return (
      <div className = 'box'>   
        <h3>Reviews {this.props.box1} </h3>        
        <h3>Average Rating {this.props.box2} </h3>
        <h3>Sentiment Analysis {this.props.box3}</h3>
      </div>
    );
  }
}


