import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title" id="t"></h1>
      </div>
      
    );

  }
}
window.setInterval(now,2000);
function now(){
  
  document.getElementById("t").innerHTML = d.getHours()+ " : " + d.getMinutes();
  }
export default App;
