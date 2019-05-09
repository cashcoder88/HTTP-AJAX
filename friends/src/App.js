import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Components/Friends';
import axios from "axios";





class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(res => {
      console.log(res);
      this.setState( {friends: res.data} )
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <Friends 
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
