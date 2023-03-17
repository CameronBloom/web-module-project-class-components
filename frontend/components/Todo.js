import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li>{ this.props.todo.name } { this.props.todo.completed ? "- completed!" : "- incomplete"}</li>
    )
  }
}
