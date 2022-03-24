import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
// import TodoForm from './components/TodoForm';
import { createTodo, getTodos } from "./services/TodoService";

export default function App() {
	// const initialTodos = [
	// 	{
	// 		_id: 0,
	// 		text: "Laundry"
	// 	},
	// 	{
	// 		_id: 1,
	// 		text: "Dishes"
	// 	},
	// ]
	const [todos, setTodos] = useState([])

	const refreshTodos = async () => {
		// get the stuff from the server
		const freshTodos = await getTodos();
		setTodos(freshTodos);
	}

	useEffect(() => {
		refreshTodos();
	}, []) // pass empty array as second parameter if you want it to only run once


	const onCreateTodo = async (newTodo) => {
		await createTodo(newTodo);
		refreshTodos();
	}

	// if(dsjfkdslfds) {
	// 	// CAN'T HOOK HERE
	// }

	// const onCreateClick = () => {
	// 	// CAN'T HOOK HERE
	// }

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
