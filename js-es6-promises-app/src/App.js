import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const url = 'https://randomuser.me/api/?results=5';
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => this.setState({ users: data.results })); 
  }

  render() {
    let list = this.state.users.map(user =>{
      return <User key={user.id.value} user={user}/>
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a list of names</h1>
        </header>
        <p className="App-intro">
          The code is in <code>src/App.js</code>.
        </p>
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
