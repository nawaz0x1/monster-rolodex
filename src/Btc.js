import { Component } from 'react';

export default class Btc extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((todos) =>
        this.setState({
          todo: todos,
        })
      );

    setTimeout(() => {
      console.log(this.state);
    }, 3000);
  }
  render() {
    return (
      <div>
        {this.state.todo.map((task) => {
          return <h1 key={task.id}>{task.title}</h1>;
        })}
      </div>
    );
  }
}
