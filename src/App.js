import { Component } from 'react';
import './App.css';
import CardList from './card-list/card-list.component.jsx';
import SearchBox from './search-box/search-box.components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { searchField, monsters } = this.state;
    const { onSearchChange } = this;

    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-header">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className="search-box"
          placeholder="search monsters"
        />
        <CardList monsters={newMonsters} />
      </div>
    );
  }
}

export default App;
