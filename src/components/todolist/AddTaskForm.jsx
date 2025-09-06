import React, { useState } from 'react';
import './todo.css'
const AddTaskForm = (props) => {
    const { addTask } = props;

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') return; // Prevent adding empty tasks
        addTask(inputValue);
        setInputValue(''); // Clear input after adding task
    }
    return (
        <form className="add-task-form" onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Enter your task"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit" >Add</button>
        </form>
    );
}
export default AddTaskForm;