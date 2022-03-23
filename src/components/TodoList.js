import React from 'react'

// We wouldn't name these todoProp and TodoComponent, this is just for demonstration
function TodoComponent({ todoProp }) {
    return (
        <div className="row py-3">
            <div className="col">
                <input type="checkbox" className="form-check-input me-3"/>
                { todoProp.text }
            </div>
            <div className="col">
                <button className="btn btn-primary btn-sm float-end">Edit</button>
            </div>
        </div>
    )
}

export default function TodoList({ todos }) {
    // We wouldn't name these todoParameter, todoProp and TodoComponent, this is just for demonstration
    const todoElements = todos.map(todoParameter => <TodoComponent todoProp={todoParameter}/>);
    const emptyElement = <p>Tada! You have no todos.</p>
    return (
        <div className="container position-relative striped">
            { (todoElements.length) ? todoElements : emptyElement }
        </div>
    )
}
