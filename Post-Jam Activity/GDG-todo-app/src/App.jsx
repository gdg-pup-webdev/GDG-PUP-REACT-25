import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const getCurrentDate = () => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const now = new Date()
    const getOrdinal = (n) => {
      const s = ['th','st','nd','rd'], v = n % 100
      return n + (s[(v - 20) % 10] || s[v] || s[0])
    }
    return `${days[now.getDay()]}, ${getOrdinal(now.getDate())} ${months[now.getMonth()]}`
  }

  return (
    <div className="max-w-[500px] mx-auto py-8 px-4 min-h-screen" style={{ background: '#18191b' }}>
      <Header taskCount={todos.length} currentDate={getCurrentDate()} />

      <div className="bg-bg-card rounded-3xl p-6 shadow-lg">
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        <TodoInput addTodo={addTodo} />
      </div>

      <footer className="fixed bottom-0 left-0 right-0 text-center py-4 bg-bg-body border-t border-bg-card-hover text-sm text-google-yellow/30">
        © {new Date().getFullYear()} GDGCoc PUP. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App