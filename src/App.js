import React, { Component } from 'react';
import logo from './images/logo.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App" >
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
      <div className="App-background">
      </div>
    <div className="App-header">
    <img className="App-logo" src={logo} width="30%" height="40%" />
   <div className="App-container">
    <b className="App-text" >We are kinder. A new and exciting expierence openening soon.
    Enter your email to be the first to find out the details! </b>
    
    <form className="App-input" >
      Email: <input type="text" name="email"/><br/>
      <input className="App-input" type="submit" value="Submit" onClick={myFunction}/>
     </form>
    </div>
    </div>
      </div>
    );
  }
}

function myFunction() {
  console.log("HI");
  }

export default App;