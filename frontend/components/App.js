import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: uuidv4(), // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: uuidv4(),
          completed: false
        },
        {
          name: 'Build a Website',
          id: uuidv4(),
          completed: false
        }
      ],
      newTodo: "",
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleStatusToggle = this.handleStatusToggle.bind(this);
    
  }

  addTodo() {
    const { todos, newTodo } = this.state;
    if (newTodo) {
      this.setState(prevState => ({
        // add the new todo to the list of existing todos
        todos: [...prevState.todos, { name: newTodo, id:uuidv4(), completed: false }],
        // reset input value on submission
        newTodo: ''
      }));
    }
    console.log(todos)
  }

  handleInputChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos}/>
        <div>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
            placeholder="Enter a new todo item"
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
      </div> 
    );
  }
}
