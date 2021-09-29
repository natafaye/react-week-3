import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import { getTodos, createTodo, updateTodo, deleteTodo } from "./services/TodoService";

let tempID; // This is my hack, don't judge

export default function App() {
	
	const [todos, setTodos] = useState([])
	const [currentEditTodo, setEditTodo] = useState(null)

	const handleEditButtonClicked = (todo) => {
		setEditTodo(todo);
	}

	const handleSaveTodoForm = (updatedTodo) => {
		// maybe create a new todo
		// maybe update a todo
		// you could call updateTodo or createTodo from here to persist to server
	}

	const refreshTodos = async () => {
		let freshTodos = await getTodos();
		if(!freshTodos) {
			freshTodos = [];
		}
		setTodos(freshTodos);
	}
	useEffect(() => {
		refreshTodos();
	}, [])

	// Render
	return (
		<React.Fragment>
			<div className="container mt-3">
				<div className="row mb-3">
					<div className="col">
						<h2>Ta Da</h2>
					</div>
					<div className="col">
						<button className="btn btn-success float-end">New Todo</button>
					</div>
				</div>
			</div>
			<TodoList todos={todos}/>
			<TodoForm onSave={handleSaveTodoForm} todo={currentEditTodo}/>
		</React.Fragment>
	)
}
