function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="group flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer animate-slideIn hover:bg-[rgb(43,44,46)]">
      {/* Checkbox */}
      <div
        onClick={() => toggleComplete(todo.id)}
        className={`w-6 h-6 border-[2.5px] rounded-md cursor-pointer transition-all flex items-center justify-center flex-shrink-0
          ${todo.completed
            ? 'bg-google-green border-transparent'
            : 'border-border-col hover:border-google-green'
          }`}
      >
        {todo.completed && (
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Text */}
      <span className={`flex-1 text-base transition-all ${todo.completed ? 'text-text-muted line-through' : 'text-text-main'}`}>
        {todo.text}
      </span>

      {/* Delete */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-transparent border-none text-text-muted cursor-pointer p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center hover:bg-[#161414] hover:text-google-red"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem