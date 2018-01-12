import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <div>
        <img src={this.props.user.picture.thumbnail} 
             alt={this.props.user.name.first} /><br/>
        {this.props.user.name.first} {this.props.user.name.last}
	<br/>
        {this.props.user.location.street} {this.props.user.location.city}
        <br/>
        {this.props.user.email}
        <hr/>
      </div>
    );
  }
}

export default User;
