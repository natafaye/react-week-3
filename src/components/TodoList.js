import React from 'react'

function TodoListItem({ todoProp }) { // todoProp = { _id: 0, text: "Laundry" }
    //const { todoProp } = props;
    return (
        <li className="list-group-item">{  todoProp.text }</li>
    )
}

export default function TodoList({ todos }) {
  return (
    <ul className="list-group">
        { todos.map( todoParameter => <TodoListItem todoProp={todoParameter} /> ) }
    </ul>
  )
}


// function getMilkAndEggs() {
//     return [ "milk", "eggs" ];
// }

// const [drink, sustenance] = getMilkAndEggs()

