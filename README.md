# Student Task Manager

## Project Purpose

A simple web application that helps students manage their school tasks, assignments, and activities. Built as a college activity for Systems Integration and Architecture, demonstrating the workflow: React development → GitHub upload → MCP connection → Claude code review → Claude modifications → testing → Git commit → GitHub push.

## Features

- Add a new task (title, subject, due date, priority)
- View all tasks in a list
- Mark a task as completed (with a visual style change)
- Delete a task
- Search tasks by title or subject
- Filter tasks by status (All / Pending / Completed)
- View statistics: total, pending, and completed task counts
- Tasks persist after refresh using `localStorage`
- Responsive layout for desktop and mobile

## Technologies Used

- React.js (function components + hooks)
- Vite (build tool / dev server)
- JavaScript (ES6+)
- CSS
- Browser `localStorage` for data persistence

## Project Structure

```text
student-task-manager/
│
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskStats.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── README.md
└── .gitignore
```

## How to Install

1. Make sure you have [Node.js](https://nodejs.org/) installed (v18 or newer recommended).
2. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/student-task-manager.git
   cd student-task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## How to Run

Start the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

To build a production version:

```bash
npm run build
npm run preview
```

## Next Steps (for the class activity)

1. Push this project to a new GitHub repository named `student-task-manager`.
2. Connect the repository to Claude via MCP so Claude can inspect the files.
3. Ask Claude to review the code and suggest 2–3 improvements.
4. Apply the modifications, test locally in VS Code / VSCodium, then commit and push:
   ```bash
   git add .
   git commit -m "Review and improve React application"
   git push
   ```
