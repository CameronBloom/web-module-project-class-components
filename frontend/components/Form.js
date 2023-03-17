import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.newTodo}
          onChange={this.props.handleInputChange}
          placeholder="Enter a new todo item"
        />
        <button onClick={this.props.addTodo}>Add Todo</button>
      </form>
    )
  }
}
