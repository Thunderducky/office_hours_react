import React from "react"

function TodoList(props){
  console.log(props);
  return <div>
    TodoList, this is where my todos will go
    {
      (props.todos.length === 0)
        ? (
          <div>This is empty</div>
        )
        : (
          <ul>
            {props.todos.map(todo => {
              return <li>{todo.text}</li>
            })}
          </ul>
        )
    }
  </div>
}

export default TodoList;
