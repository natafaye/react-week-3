import React from 'react';

function Todo({ todo, onEdit, onDelete }) {

    return (
        <div className="row py-3">
            <div className="col">
                <input type="checkbox" className="form-check-input me-3" onChange={() => onDelete(todo)}/>
                { todo.text }
            </div>
            <div className="col">
                <button className="btn btn-primary btn-sm float-end" onClick={() => onEdit(todo)}>Edit</button>
            </div>
        </div>
    )
}

export default function TodoList({ todos, onEdit, onDelete, isLoading }) {
    const todoElements = todos.map(todo => <Todo key={todo._id} todo={todo} onEdit={onEdit} onDelete={onDelete} />);
    const emptyElement = <p>Tada! You have no todos.</p>
    const loadingElement = 
        <div className="loading-overlay text-center d-flex align-items-center justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    return (
        <div className="container position-relative striped">
            { (todoElements) ? todoElements : emptyElement }
            { (isLoading) ? loadingElement : "" }
        </div>
    )
}
