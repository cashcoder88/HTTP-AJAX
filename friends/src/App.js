import React, { Component } from 'react';
import './App.css';
import Friends from './Components/Friends';
import FriendsForm from './Components/FriendsForm';
import axios from "axios";
// import FriendsFormUpdate from './Components/FriendsFormUpdate';





class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
      // activeFriend: null
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

  // //UPDATE
  // updateItem = updatedItem => {
  //   axios
  //     .put(`http://localhost:3000/friends`, updatedItem)
  //     .then(res => {
  //       this.setState({ items: res.data });
  //       this.props.history.push("/item-list");
  //     })
  //     .catch(err => console.log(err));
  // };

  render(props) {
    return (
      <div className="App">
        <Friends 
          friends={this.state.friends}
        />
        <FriendsForm {...props} addItem={this.addItem}/>
        {/* <FriendsFormUpdate {...props} //updateItem={this.updateItem} 
        /> */}
      </div>
    );
  }
}

export default App;
