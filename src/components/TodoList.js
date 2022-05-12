import React, { Component } from 'react'


// export default class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             amount: 0,
//             isRaining: true
//         }
//     }
    
//     render() {
//         <div>
//             The amount is: { this.state.amount }
//             Is it raining: { this.state.isRaining }
//             <button onClick={ () => this.setState({ amount: 5 }) }>Set it to 5</button>
//         </div>
//     }
// }

// export default function TodoList({ todoList}) {
//     const [amount, setAmount] = useState(0)
//     const [isRaining, setIsRaining] = useState(false)

//     return (
//         <div>
//             The amount is: { amount }
//             Is it raining: { isRaining }
//             <button onClick={  () => setAmount(5)  }>Set it to 5</button>
//         </div>
//     )
// }









export default function TodoList({ todoList }) {

    return (
        <ul className="list-group">
            { todoList.map(todo => (
                <li className="list-group-item">{todo.text}</li>
            ))}
        </ul>
    )
}


// props = {
//     todoList: [
//         {
//             id: 0,
//             text: "Do this"
//         },
//         {
//             id: 1,
//             text: "Also do this"
//         }
//     ],
//     showSomething: true,
//     currentUser: {
//         id: 0,
//         name: "Natalie"
//     }
// }





// function getTwoCookies() {
//     return ["chocolate chip cookie","sugar cookie"]
// }

// const [yourCookie,  myCookie] = getTwoCookies()