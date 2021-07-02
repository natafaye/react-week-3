import React, { useState } from 'react'
import Modal from './Modal'

export default function TodoFormModal({ todo, isOpen, onSave, onClose }) {

    const [textValue, setTextValue] = useState((todo) ? todo.text : "");
    const handleTextChange = (e) => setTextValue(e.target.value);

    const handleSave = () => {
        onSave({ text: textValue });
    }

    return (
        <Modal 
            isOpen={isOpen} 
            title={ (todo) ? 'Edit ' + todo.text : "New Todo" } 
            actionButtonText="Save" 
            onActionButtonClick={handleSave}
            onClose={onClose} >
            <form>
                <input className="form-control" value={textValue} onChange={handleTextChange}/>
            </form>
        </Modal>
    )
}
