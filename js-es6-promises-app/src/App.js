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
    // Single fetch
    const url = 'https://randomuser.me/api/?results=5';
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => this.setState({ users: data.results })); 

    // Two fetches, with merged result
    /*const url = 'https://randomuser.me/api/?results=2';
    
    let fetch1 = fetch(url)
    .then((resp) => resp.json())
    .then((data) => {return data.results}) 

    let fetch2 = fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return data.results.map(user => {
        user.name.last = user.name.last + '-smith';
        console.log(user);
        return user;
      });
    })

    Promise.all([fetch1, fetch2])
    .then(results => {
        let items = [].concat.apply([],results);
        this.setState({ users: items});
    })
    */
  }

  render() {
    let list = this.state.users.map(user =>{
      return <User key={user.email} user={user}/>
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
