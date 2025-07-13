import AddTaskForm from "./components/project/todolist/AddTaskForm"
import DeleteAllButton from "./components/project/todolist/DeleteAllButton"
import Header from "./components/project/todolist/Header"
import TaskList from "./components/project/todolist/TaskList"
import './components/project/todolist/todo.css'
import { useState } from "react";
const App = () => {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'doing homework' },
    { id: 2, text: 'watching youtube' },
    { id: 3, text: 'learning English' },
  ]);

  return (
    <div className="todo-container">
      <Header />
      <AddTaskForm />
      <TaskList tasks={tasks} />
      <DeleteAllButton />

    </div>
  )
}

export default App
