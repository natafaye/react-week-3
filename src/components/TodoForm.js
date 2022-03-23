import React, { useState } from 'react';

export default function TodoForm({ todo, onSave }) {
    let initialTextValue = ""
    if(todo) {
        initialTextValue = todo.text;
    }
    const [textValue, setTextValue] = useState(initialTextValue);
    
    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    }
    
    // If we had another property on our todo, we could allow that to be edited as well
    // const [descriptionValue, setDescriptionValue] = useState("Starting description");
    // const handleDescriptionChange = (e) => {
    //     setDescriptionValue(e.target.value);
    // }

    const handleSave = () => {
        const updatedTodo = {
            text: textValue,
            // description: descriptionValue
        }
        onSave(updatedTodo);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">   
                    <h2>Todo Form</h2>
                    <form>
                        <input type="text" value={textValue} onChange={handleTextChange}></input>
                        {/* <input type="text" value={descriptionValue} onChange={handleDescriptionChange}></input> */}
                        <button className="btn btn-success" onClick={handleSave}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
