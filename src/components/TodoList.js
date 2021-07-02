import React from 'react'

function Todo({ todo, onDelete, onEdit }) {
    return (
        <div className="row py-3">
            <div className="col">
                <input type="checkbox" className="form-check-input me-3" onChange={() => onDelete(todo) }/>
                { todo.text }
            </div>
            <div className="col">
                <button className="btn btn-primary btn-sm float-end" onClick={() => onEdit(todo)}>Edit</button>
            </div>
        </div>
    )
}

export default function TodoList({ todos, onDelete, onEdit }) {
    const todoElements = todos.map(todo => <Todo key={todo._id} todo={todo} onDelete={ onDelete } onEdit={ onEdit } />);
    const emptyElement = <p>Tada! You have no todos.</p>
    return (
        <div className="container position-relative striped">
            { (todoElements) ? todoElements : emptyElement }
        </div>
    )
}