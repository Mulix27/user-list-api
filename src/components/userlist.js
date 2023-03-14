import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
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

  getGravatarUrl = (email) => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  };

  render() {
    return (
      <div>
        <h1 className="title">User List</h1>
        <div className="user-list-container">
          {this.state.users.map((user) => (
            <div className="user-card" key={user.id}>
              <h2>{user.name}</h2>
              <img src={this.getGravatarUrl(user.email)} alt="avatar" />
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

