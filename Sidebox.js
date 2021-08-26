import React from 'react' ;
import './App.css';
class Sidebox extends React.Component {
    render() {
        return(
            <div className = 'side'>
            <h3>Dashboard</h3> 
            <h3>Widget</h3>
            <h3>Reviews</h3>
            <h3>Customers</h3>
            <h3>Online Analysis</h3>
            <h3>Settings</h3>
            </div>)
    }
}
export default Sidebox ;