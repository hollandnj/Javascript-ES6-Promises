import React, { Component } from 'react';

class Story extends Component {

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

export default Story;
