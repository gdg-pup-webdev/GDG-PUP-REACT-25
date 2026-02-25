import TodoItem from './TodoItem'

function TodoList({ todos, toggleComplete, deleteTodo }) {
  
  return (
    <div>
      {todos.length === 0 ? (
        <div className="text-center py-12 px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#e3f2fd] to-[#f1f8e9] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl text-text-main mb-2 font-medium">No tasks yet</h3>
          <p className="text-text-muted text-sm">Add one to get started!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TodoList