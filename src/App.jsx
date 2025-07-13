import AddTaskForm from "./components/project/todolist/AddTaskForm"
import DeleteAllButton from "./components/project/todolist/DeleteAllButton"
import Header from "./components/project/todolist/Header"
import './components/project/todolist/todo.css'

const App = () => {

  return (
    <div className="todo-container">
      <Header />
      <AddTaskForm />
      <DeleteAllButton />

    </div>
  )
}

export default App
