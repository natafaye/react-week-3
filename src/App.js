import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import TodoFormModal from './components/TodoFormModal';
import { getTodos, createTodo, updateTodo, deleteTodo } from "./services/TodoService";

let tempID; // This is my hack, don't judge

export default function App() {

	// State
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);
	const [isTodoFormModalOpen, setIsTodoFormModalOpen] = useState(false);

	// Read
	const refreshTodos = async () => {
		const freshTodos = await getTodos();
		setTodos((freshTodos) ? freshTodos : []);
	}
	useEffect(() => {
		refreshTodos();
	}, [])

	// Delete
	const handleDelete = async (todo) => {
		await deleteTodo(todo);
		refreshTodos();
	}

	// Create & Update
	const handleEditStart = (todo) => {
		// A little hacky here
		if(todo === null) {
			tempID = Math.random();
		}
		setEditTodo(todo);
		setIsTodoFormModalOpen(true);
	}

	const handleEditSave = async (todoData) => {
		if(editTodo)
			await updateTodo({ ...editTodo, text: todoData.text })
		else
			await createTodo(todoData);
		await refreshTodos();
		handleCloseTodoFormModal();
	}

	// Modal
	const handleCloseTodoFormModal = () => setIsTodoFormModalOpen(false);

	// Render
	return (
		<React.Fragment>
			<div className="container mt-3">
				<div className="row mb-3">
					<div className="col">
						<h2>Tah Dah</h2>
					</div>
					<div className="col">
						<button className="btn btn-success float-end" onClick={() => handleEditStart(null)}>New Todo</button>
					</div>
				</div>
			</div>
			<TodoList 
				todos={todos} 
				onDelete={handleDelete} 
				onEdit={handleEditStart}/>
			<TodoFormModal 
				key={(editTodo) ? editTodo._id : tempID }
				todo={editTodo} 
				isOpen={isTodoFormModalOpen} 
				onSave={handleEditSave} 
				onClose={handleCloseTodoFormModal}/>
		</React.Fragment>
	)
}
