import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li key={this.props.key }>{ this.props.todo.name } { this.props.todo.completed ? "- completed!" : "- incomplete"}</li>
    )
  }
}
