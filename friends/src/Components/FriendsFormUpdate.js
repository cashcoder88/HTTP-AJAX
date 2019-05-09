import React from "react";

class FriendsFormUpdate extends React.Component {
  state = {
    friends: this.props.activeItem
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      item: {
        ...prevState.item,
        [ev.target.friends]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateItem(this.state.friends);
  };

  render() {
    return (
        <div>
        <h2 className='title'>Update Friend Form</h2>
        <form onSubmit={this.handleSubmit} className='form-container'>
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

          <button className="md-button form-button">Update Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsFormUpdate;