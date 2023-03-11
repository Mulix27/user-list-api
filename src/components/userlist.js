// UserList.js
import React, { Component } from "react";
import axios from "axios";
import "../style.css";

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <h1 className="title">User List</h1>
        <div className="user-list-container">
          {this.state.users.map((user) => (
            <div className="user-card" key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
              <p className="company">{user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
