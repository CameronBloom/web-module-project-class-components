import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Form from './Form';

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
          completed: true
        }
      ],
      newTodo: "",
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearComplete = this.handleClearComplete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);    
  }

  addTodo(event) {
    event.preventDefault();
    const { todos, newTodo } = this.state;
    if (newTodo) {
      this.setState(prevState => ({
        ...this.state,
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

  handleClearComplete() {
    const { todos } = this.state;
    const filteredTodos = todos.filter((todo) => {
      // return if not completed
      return todo["completed"] === false;
    });
    // set the state to the filtered todos (always good to destructure...)
    this.setState({ ...this.state, todos: filteredTodos })
  }

  handleToggle = (currentId) => {
    const { todos } = this.state;
    const clickedId = currentId;
    this.setState({
      ...this.state,
      todos: todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} handleToggle={ this.handleToggle }/>
        <Form newTodo={this.state.newTodo} addTodo={this.addTodo} handleInputChange={this.handleInputChange}/>
        <button onClick={() => this.handleClearComplete() }>Clear Completed Tasks</button>
      </div> 
    );
  }
}
