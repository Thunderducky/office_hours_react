import React from "react"

function NewTodoForm(props){
  return <div>
    <input name="newTodo" type="text" value={props.newTodo} onChange={props.handleInputChange} />
    <button onClick={props.handleSubmit}>Add Todo</button>
  </div>
}

export default NewTodoForm;
