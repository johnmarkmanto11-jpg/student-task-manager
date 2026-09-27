import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import './index.css'

const STORAGE_KEY = 'student-task-manager-tasks'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all') // all | pending | completed

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask(newTask) {
    const task = {
      id: Date.now(),
      title: newTask.title,
      subject: newTask.subject,
      dueDate: newTask.dueDate,
      priority: newTask.priority,
      completed: false,
    }
    setTasks((prev) => [task, ...prev])
  }

  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const filteredTasks = tasks
    .filter((t) => {
      if (filter === 'pending') return !t.completed
      if (filter === 'completed') return t.completed
      return true
    })
    .filter((t) => {
      const term = searchTerm.toLowerCase()
      return (
        t.title.toLowerCase().includes(term) ||
        t.subject.toLowerCase().includes(term)
      )
    })

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((t) => t.completed).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Student Task Manager</h1>
        <p className="subtitle">Keep track of assignments and activities</p>
      </header>

      <main className="app-main">
        <TaskForm onAddTask={addTask} />

        <TaskStats
          total={totalTasks}
          completed={completedTasks}
          pending={pendingTasks}
        />

        <div className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="Search by title or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'pending' ? 'active' : ''}
              onClick={() => setFilter('pending')}
            >
              Pending
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      </main>
    </div>
  )
}

export default App
