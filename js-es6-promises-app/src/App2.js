import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import User from './User';
import MyTimeline from './MyTimeline';
import moment from 'moment'

const basicExample = {
  options: {
    start: '2014-04-10',
    end: '2014-04-30',
  },
  groups: [],
  items: [
    {id: 1, content: 'item 1', start: '2014-04-20'},
    {id: 2, content: 'item 2', start: '2014-04-14'},
    {id: 3, content: 'item 3', start: '2014-04-18'},
    {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
    {id: 5, content: 'item 5', start: '2014-04-25'},
    {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
  ],
}

        /*const ItemTemplate = React.createClass({
          render: function() {
            var { item } = this.props;
            return <div>
                <label>{item.content}</label>
            </div>
          }
        })*/

const groupsExample = {
  groups: [],
  items: [],
  options: {
    groupOrder: 'content',  // groupOrder can be a property name or a sorting function
    //template: function (item, element) {
    //            if (!item) { return }
    //            ReactDOM.unmountComponentAtNode(element);
    //            return ReactDOM.render(<ItemTemplate item={item} />, element);
    //        },
  },
}

const now = moment().minutes(0).seconds(0).milliseconds(0)
const groupCount = 3
const itemCount = 20

// create a data set with groups
const names = ['John', 'Alston', 'Lee', 'Grant']
for (let g = 0; g < groupCount; g++) {
  groupsExample.groups.push({ id: g, content: names[g] })
}

// create a dataset with items
for (let i = 0; i < itemCount; i++) {
  const start = now.clone().add(Math.random() * 200, 'hours')
  const group = Math.floor(Math.random() * groupCount)
  groupsExample.items.push({
    id: i,
    group: group,
    content: '<Button id="foo">Foo</Button> item ' + i +
      ' <span style="color:#97B0F8">(' + names[group] + ')</span>',
    start: start,
    end: start + 1000*60*60*24*14,
    type: 'range'
  })
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {

  }

  clickHandler(props) {
    
    const { group, item } = props
    //const selectedIds = groupsExample.items.filter(item => item.group === group).map(item => item.id)
    console.log(props)
    const selectedIds = [item]
    this.setState({
      selectedIds
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a list of names</h1>
        </header>
        <p className="App-intro">
          The code is in <code>src/App.js</code>.
        </p>
        {/*<MyTimeline
          {...basicExample}
        />*/}
        <MyTimeline
          {...groupsExample}
          clickHandler={this.clickHandler.bind(this)}
          selection={this.state.selectedIds}
        />
      </div>
    );
  }
}

export default App;


/*

 */