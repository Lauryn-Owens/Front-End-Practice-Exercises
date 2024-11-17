import './App.css'
import TodoForm from './todo/todoForm'
import TodoList from './todo/todoList'

function App() {

  return (
    <>
      <h1 className='text-3xl text-purple-500 underline text-center mt-8'>UseReducer and Context API Todo List</h1>
      <TodoForm/>
      <TodoList/>
    </>
  )
}

export default App
