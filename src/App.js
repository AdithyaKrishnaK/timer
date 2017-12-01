import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title" id="t"></h1>
        <h1 id ="blink" > : </h1>
        <h1 className="App-title" id="m"></h1>
      </div>
      
    );

  }
}
window.setInterval(now,2000);
function now(){
var d =new Date();
document.getElementById("t").innerHTML = d.getHours();
document.getElementById("m").innerHTML = d.getMinutes();}
export default App;
