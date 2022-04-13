import React, { Component, useEffect, useState } from 'react'
import TodoList from './components/TodoList'
// import TodoForm from './components/TodoForm';
import { createTodo, getTodos, updateTodo, deleteTodo } from "./services/TodoService";

// export default class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			greeting: "hello",
// 			show: true
// 		}
// 	}

// 	onButtonClick = () => {
// 		this.setState({ greeting: "goodbye "});
// 	}

// 	render() {
// 		return <div>
// 			{ this.state.greeting }
// 			<button onClick={this.onButtonClick}>Say goodbye</button>
// 		</div>
// 	}
// }

// export default function App() {

// 	const [greeting, setGreeting] = useState("hello")
// 	const [show, setShow] = useState(true)

// 	const onButtonClick = () => {
// 		setGreeting("goodbye");
// 	}

// 	return (
// 		<div>
// 			{ greeting }
// 			<button onClick={onButtonClick}>Say goodbye</button>
// 		</div>
// 	)
// }

export default function App() {
	const [todos, setTodos] = useState( [] )

	const refreshTodos = async () => {
		const freshTodos = await getTodos()
		setTodos(freshTodos);
        // go get the all the todos from the server
		// set the state to be that array of todos that we got from the server
    }
	
    useEffect(() => {
		refreshTodos();
	}, []) // only run once, after the first render

	const addTodo = async (newTodo) => {
		await createTodo(newTodo);
		refreshTodos();
	}

	return (
		<div className="container mt-3">
			<div className="row mb-3">
				<div className="col">
					<h2>Tah Dah</h2>
				</div>
				<div className="col">
					<button className="btn btn-success float-end" >New Todo</button>
				</div>
			</div>
			<div className="row">
				<TodoList todos={todos} />
			</div>
		</div>
	)
}


