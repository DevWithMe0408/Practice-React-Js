import AddTaskForm from "./components/todolist/AddTaskForm"
import DeleteAllButton from "./components/todolist/DeleteAllButton"
import Header from "./components/todolist/Header"
import TaskItem from "./components/todolist/TaskItem"
import TaskList from "./components/todolist/TaskList"
import './components/todolist/todo.css'
import { useState } from "react";
const App = () => {

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
    <div className="todo-container">
      <Header />
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
  )
}

export default App
