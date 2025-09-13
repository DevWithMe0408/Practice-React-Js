import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import DeleteAllButton from "./DeleteAllButton";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";

const TodoApp = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'doing homework' },
        { id: 2, text: 'watching youtube' },
        { id: 3, text: 'learning English' },
    ]);

    const deleteById = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    const addTask = (taskText) => {
        const newTask = {
            id: tasks.length + 1,
            text: taskText,
        };
        setTasks([...tasks, newTask]);
        console.log('Them thanh cong task: ', newTask);
    };
    return (
        <>
            <div className="todo-app-center">
                <div className="todo-container">
                    <AddTaskForm
                        addTask={addTask}
                    />
                    <TaskList>
                        {tasks.map((task) => {
                            console.log('Rendering TaskItem:', task);
                            return (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    deleteById={deleteById}
                                />
                            )
                        })}
                    </TaskList>

                    <DeleteAllButton />

                </div>
            </div>
        </>
    )
}
export default TodoApp;