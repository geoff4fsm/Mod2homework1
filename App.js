import React from 'react' ;
import Sidebox from './Sidebox';
import Datasets from './Datasets';
import Visitors from './Visitors';
import Box from './Box';
import './App.css';
const box1 = 1281
const box2 = 4.6
const box3 = [960,122,321]
class App extends React.Component {
  state = {
    box1: box1,
    box2: box2,
    box3: box3
  }
  render() {
    return(
      <div id ="app">{
      }  
        <Sidebox />
        <Box />
        <Datasets />
        <Datasets />
        <Visitors />
      
      </div>
    )
  }
}


export default App;
