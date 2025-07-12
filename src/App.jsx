import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const MyComponent = () => {
  return (
    <div>
      <h2>My Component</h2>
      <p>This is a simple component to demonstrate React functionality.</p>
      <p>It can be used to show how components work in React.</p>
      <p>Feel free to modify it as needed!</p>
      <p>Enjoy coding with React!</p>
      <p>Happy coding!</p>
      <p>Keep learning and building amazing things!</p>
      <p>React is a powerful library for building user interfaces.</p>
      <p>Components are the building blocks of React applications.</p>
      <p>Use props to pass data to components.</p>
      <p>State allows components to manage their own data.</p>
      <p>Hooks like useState and useEffect are essential for functional components.</p>
      <p>React's virtual DOM optimizes rendering performance.</p>
    </div>
  );
}
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <MyComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
