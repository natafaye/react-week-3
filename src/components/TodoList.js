import React from 'react'

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

    const todoElements = todos.map(todoParameter => <TodoComponent todoProp={todoParameter}/>);
    const emptyElement = <p>Tada! You have no todos.</p>
    return (
        <div className="container position-relative striped">
            { (todoElements.length) ? todoElements : emptyElement }
        </div>
    )
}
