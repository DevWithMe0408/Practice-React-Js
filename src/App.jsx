import { Outlet } from "react-router-dom"
import Header from "./components/layout/Header"
import TodoApp from "./components/todolist/TodoApp"

const App = () => {
  return (
    <>
      <Header />
      {/* chỉ định ví trị render các component tương ứng với các route con */}
      <Outlet />
    </>
  )
}

export default App
