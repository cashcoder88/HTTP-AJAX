import React, { Component } from 'react';
import './App.css';
import Friends from './Components/Friends';
import FriendsForm from './Components/FriendsForm';
import axios from "axios";





class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }


  //GET
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

  //POST 
  addItem = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ friends: res.data });
        // this.props.history.push("/item-list");
      })
      .catch(err => console.log(err));
  };

  render(props) {
    return (
      <div className="App">
        <Friends 
          friends={this.state.friends}
        />
        <FriendsForm {...props} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
