function TaskItem({ task, onToggleComplete, onDelete }) {
  const priorityClass = `priority-${task.priority.toLowerCase()}`

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <h3>{task.title}</h3>
        <p className="task-meta">
          <span className="task-subject">{task.subject}</span>
          <span className="task-date">Due: {task.dueDate}</span>
          <span className={`task-priority ${priorityClass}`}>
            {task.priority}
          </span>
        </p>
        <span className={`task-status ${task.completed ? 'done' : 'pending'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>

      <div className="task-actions">
        <button className="complete-btn" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
