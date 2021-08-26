import React, { Component } from 'react'
import './App.css';
export default class Visitors extends Component {
    render() {
        return (
            <div className = 'visits'>
               <h3>Website Visitors</h3>
               <h2>821</h2> 
               <div className = 'empty'></div>
            </div>
        )
    }
}
