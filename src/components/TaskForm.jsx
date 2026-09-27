import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!title.trim() || !subject.trim() || !dueDate) {
      setError('Please fill in the title, subject, and due date.')
      return
    }

    onAddTask({ title: title.trim(), subject: subject.trim(), dueDate, priority })

    setTitle('')
    setSubject('')
    setDueDate('')
    setPriority('Medium')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add a Task</h2>

      {error && <p className="form-error">{error}</p>}

      <div className="form-row">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="form-row">
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>

      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
