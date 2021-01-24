import React, { Component } from 'react'

import ToDoList from './views/components/ToDoList'

import NewToDoItem from './views/components/NewToDoItem'

import {TodoService} from './data/services/TodoService'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  async componentDidMount() {
    const todoList = await TodoService.list();
    this.setState({todoList})
  }

  add(description)
  render() {
const {state} = this;

    return (
      <div className="App">
        <NewToDoItem  onAdd={description} />
        <hr />
        <ToDoList items = {state.todoList} />
      </div>
    )
  }
}
