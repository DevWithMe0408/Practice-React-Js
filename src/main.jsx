import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import './styles/global.css'
import TodoApp from './components/todolist/TodoApp.jsx'
import ErrorPage from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [ // nested routes
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: '/product',
        element: <ProductPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
    ]
  },
  {
    path: '/Login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
