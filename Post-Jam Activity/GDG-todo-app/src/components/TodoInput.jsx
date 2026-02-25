import { useState } from 'react'

function TodoInput({ addTodo }) {
  const [input, setInput] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    addTodo(input)
    setInput('')
    setIsExpanded(false)
  }

  return (
    <div className="mt-6">
      {isExpanded ? (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            autoFocus
            className="flex-1 px-4 py-3.5 border-2  bg-white border-google-yellow rounded-xl outline-none transition-all bg-bg-card text-black focus:border-google-red focus:shadow-[0_0_0_3px_rgba(66,133,244,0.1)]"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-google-yellow text-white border-none rounded-xl text-base font-medium cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="px-4 py-3.5 bg-bg-card-hover text-text-main border-none rounded-xl text-base font-medium cursor-pointer transition-all hover:bg-border-col"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 bg-white border-none rounded-full text-google-green cursor-pointer shadow-[0_4px_12px_rgb(37,34,34)] transition-all ml-auto flex items-center justify-center hover:scale-110 hover:shadow-[0_6px_20px_#34a853]"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default TodoInput