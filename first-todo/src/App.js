import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "bala",
      count:0
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      count:this.state.count+1
    })
  }
  
  render() {
    //const name="ranjith";
    const {name} = this.state
    return (
      <div className="App">
        <First name={name} age="27" onClick={this.onClick} />
        {this.state.count}
      </div>
    );
  }
}

export default App;
