import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component{
  state = {
    newTodo: "",
    todos: [{
      text: "this is a thing I have to do"
    },
    {
      text: "this is another thing I have to do"
    }]
  };

  handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  todoSubmit = event => {
    event.preventDefault();
    console.log("we tried to submit something")
    console.log(this.state);
    const todos = [{text: this.state.newTodo}, ...this.state.todos];
    this.setState({todos, newTodo: ""});
  };

  render(){
    return (
      <div>
        <NewTodoForm
          newTodo={this.state.newTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.todoSubmit}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
