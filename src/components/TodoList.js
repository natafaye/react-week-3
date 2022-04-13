import React, { Component } from 'react'
import { useEffect } from 'react/cjs/react.production.min'

// export default class TodoList extends Component {
//   render() {
//     return (
//       <div>{ this.props.showCompleted }</div>
//     )
//   }
// }


export default function TodoList({ todos }) {
    return (
        <ul className="list-group">
            {
                todos.map(todo => <li className="list-group-item" key={todo.id}>{ todo.text }</li>)
            }
        </ul>

    )
}



// function getTwoTreats() {
//     return ["candy", "ice cream"];
// }

// const [ breakfastTreat, lunchTreat ] = getTwoTreats();
// console.log(breakfastTreat)
