import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/TodoService';
import TodoFormModal from './components/TodoFormModal';
import TodoList from './components/TodoList';

let tempID;

export default function App() {
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);
	const [isTodoFormModalOpen, setIsTodoFormModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const refreshTodos = async () => {
		setIsLoading(true);
		const freshTodos = await getTodos();
		setTodos((freshTodos) ? freshTodos : []);
		setIsLoading(false);
	}

	useEffect(() => {
		refreshTodos();
	}, []);

	const handleEditStart = (todo) => {
		if(todo === null) {
			tempID = Math.random();
		}
		setEditTodo(todo);
		setIsTodoFormModalOpen(true);
	}

	const handleEditSave = async (todoData) => {
		setIsLoading(true);
		if(editTodo)
			await updateTodo({ ...editTodo, text: todoData.text })
		else
			await createTodo(todoData);
		await refreshTodos();
		handleCloseTodoFormModal();
	}

	const handleDelete = async (todo) => {
		await deleteTodo(todo);
		refreshTodos();
	}
    
	const handleCloseTodoFormModal = () => setIsTodoFormModalOpen(false);

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
			<TodoList todos={todos} 
					onEdit={handleEditStart} 
					onDelete={handleDelete}
					isLoading={isLoading} />
			<TodoFormModal 
				key={(editTodo) ? editTodo._id : tempID }
				todo={editTodo} 
				isOpen={isTodoFormModalOpen} 
				onSave={handleEditSave} 
				onClose={handleCloseTodoFormModal}
				isLoading={isLoading} />
		</React.Fragment>
	);
}
