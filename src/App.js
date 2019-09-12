import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: 'Cool', age: 29},
            { name: 'Beans', age: 30 },
            { name: 'Bodie', age: 10 }

        ],

        otherState: 'some value'


    }

    switchName = () => {
        //console.log('was clicked');
        this.setState({
            persons: [
                { name: 'Bakery', age: 29 },
                { name: 'Beans', age: 30 },
                { name: 'Bodie', age: 13 }
            ]
        })
    }

      render() {
        return (
          <div className="App">
            <h1>Welcome to My Page</h1>
                <button onClick={this.switchName}>Switch</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
          );

          //return React.createElement('div', {className: 'App' }, null, React.createElement('h1', null, 'Hello there'));
      }
}

export default App;
