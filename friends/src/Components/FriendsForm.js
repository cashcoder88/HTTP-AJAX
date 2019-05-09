import React from "react";

class FriendsForm extends React.Component {
  state = {
    friends: {
        name: '',   
        age: '',
        email: ''
    }
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      friends: {
        ...prevState.friends,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.friends);
  };

  render() {
    return (
      <div>
        <h2>New Friend Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.friends.name}
          />
          <div className="baseline" />

          <input
            type="text"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.friends.age}
          />
          <div className="baseline" />

          <input
            type="text"
            name="email"
            onChange={this.changeHandler}
            placeholder="Email"
            value={this.state.friends.email}
          />
          <div className="baseline" />

          <button className="md-button form-button">Add New Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;