import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => ({
            monsters: users,
          }),
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
