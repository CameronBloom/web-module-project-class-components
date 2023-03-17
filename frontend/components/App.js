import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: "",
    };

    this.addTodo = this.addTodo.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleStatusToggle = this.handleStatusToggle.bind(this);
    
  }

  addTodo() {
    const { newTodo } = this.state;
    if (newTodo) {
      this.setState(prevState => ({
        // create the todo object that get's inserted into the array
        // add the new todo to the list of existing todos
        todos: [...prevState.todos, { name: newTodo, id:uuidv4(), completed: false }],
        // reset input value on submission
        newTodo: ''
      }));
    }
  }

  handleInputChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  // handleStatusToggle(index) {
  //   this.setState(prevState => {
  //     const todos = [...prevState.todos];
      
  //     console.log(todos[index])
  //     // todos[index].completed = !todos[index].completed;
  //     return { todos };
  //   });
  // }


  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <ul>

          { todos.map((objTodo, index) => (
            <li key={index}>
              <div onClick={this.handleStatusToggle}>
                <span style={{ textDecoration: objTodo.completed ? 'line-through' : 'none' }}>
                  {objTodo.name}
                </span>
              </div>
            </li>
          )) }
        </ul>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={this.handleInputChange}
            placeholder="Enter a new todo item"
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
      </div> 
    );
  }
}
