import React, { Component } from 'react';
import Story from './Story';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { stories: [], isLoading: true};
  }

  componentDidMount() {
    let url = "https://hn.algolia.com/api/v1/search?query=" + this.props.user.location.city;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ stories: data.hits, isLoading: false })); 
  }

  render() {
    let storiesList = [<li key=''><Story title='loading...'/></li>];
    if (!this.state.isLoading){
      storiesList = this.state.stories.map(story => {
        let titleText = (story.title) ? story.title : story.story_title
        return <li key={story.objectID}><Story title={titleText} /></li>
      });
    }
    return (
      <div>
        <img src={this.props.user.picture.thumbnail} 
             alt={this.props.user.name.first} /><br/>
        {this.props.user.name.first} {this.props.user.name.last}
	<br/>
        {this.props.user.location.street} {this.props.user.location.city}
        <br/>
        {this.props.user.email}
        <div>Stories about '{this.props.user.location.city}'</div>
        <ul>{storiesList}</ul>
        <hr/>
      </div>
    );
  }
}

export default User;
