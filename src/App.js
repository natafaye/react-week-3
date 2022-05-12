import React, { Component, useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import { createTodo, getAllTodos } from './services/TodoService'
// import TodoForm from './components/TodoForm';

export default function App() {
	const [todoList, setTodoList] = useState([])

	const refreshTodos = async () => {
		const freshTodos = await getAllTodos(); // get the data from the backend
		setTodoList(freshTodos)
	}

	useEffect(() => {
		refreshTodos();
	}, []) // the empty array tells useEffect to only run the function after the first render and never again

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
				{/* <TodoList todoList={todoList}/> */}
			</div>
		</div>
	)
}


