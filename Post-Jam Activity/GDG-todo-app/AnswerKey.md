# Answer Key — Sparky Todo App Post-Jam Activity
**GDG PUP React & Tailwind CSS Study Jam**

> For facilitators only. Do not share with students before the activity.

---

## Feature 1: Priority Levels
> Let users tag tasks as High, Medium, or Low priority. Show a colored badge on each todo item.

**Files to update:** `TodoInput.jsx` → `App.jsx` → `TodoItem.jsx`

---

### `TodoInput.jsx`

**What to do:** Add a `priority` state and a `<select>` dropdown so users can choose a priority level when adding a task.

**Step 1 — Add the priority state** at the top of the component, alongside the existing `input` and `isExpanded` states:

```jsx
// BEFORE
const [input, setInput] = useState('')
const [isExpanded, setIsExpanded] = useState(false)

// AFTER
const [input, setInput] = useState('')
const [isExpanded, setIsExpanded] = useState(false)
const [priority, setPriority] = useState('Medium') // <<< add this
```

**Step 2 — Update the `addTodo` call** inside `handleSubmit` to pass `priority` as a second argument:

```jsx
// BEFORE
addTodo(input)

// AFTER
addTodo(input, priority) // <<< pass priority
```

**Step 3 — Reset priority** after submitting so the dropdown goes back to default:

```jsx
// BEFORE
setInput('')
setIsExpanded(false)

// AFTER
setInput('')
setPriority('Medium') // <<<  add this reset
setIsExpanded(false)
```

**Step 4 — Add the `<select>` dropdown** inside the form, right below the text `<input>`:

```jsx
// Add this below the text input field
<select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
  className="px-4 py-3.5 border-2 border-google-yellow rounded-xl text-base outline-none bg-bg-card text-text-main"
>
  <option value="High">🔴 High</option>
  <option value="Medium">🟡 Medium</option>
  <option value="Low">🟢 Low</option>
</select>
```

---

### `App.jsx`

**What to do:** Update `addTodo` to accept the `priority` parameter and store it in the todo object.

```jsx
// BEFORE
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  }
  setTodos([...todos, newTodo])
}

// AFTER
const addTodo = (text, priority) => {  //  <<< add priority parameter
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
    priority,  // <<< store it in the todo object
  }
  setTodos([...todos, newTodo])
}
```

---

###  `TodoItem.jsx`

**What to do:** Add a colored priority badge that appears next to the todo text. The badge color changes based on the priority level.

**Add this** inside the todo item, after the `<div className="flex-1">` text block:

```jsx
// Add this after the text div and before the delete button
<span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0
  ${todo.priority === 'High'   ? 'bg-google-red/20 text-google-red' :
    todo.priority === 'Medium' ? 'bg-google-yellow/20 text-google-yellow' :
                                  'bg-google-green/20 text-google-green'}`}>
  {todo.priority}
</span>
```

> 💡 **How it works:** The ternary chain checks `todo.priority`. If it's `'High'` it shows a red badge, if `'Medium'` yellow, otherwise green (for `'Low'`).

---
---

## Feature 2:  Due Dates
> Let users set a due date when adding a task. Display it on the todo item.

**Files to update:** `TodoInput.jsx` → `App.jsx` → `TodoItem.jsx`

---

###  `TodoInput.jsx`

**What to do:** Add a `date` state and a `<input type="date" />` picker inside the form.

**Step 1 — Add the date state:**

```jsx
// BEFORE
const [input, setInput] = useState('')
const [isExpanded, setIsExpanded] = useState(false)

// AFTER
const [input, setInput] = useState('')
const [isExpanded, setIsExpanded] = useState(false)
const [date, setDate] = useState('') // <<< add this (empty string = no date selected)
```

**Step 2 — Update the `addTodo` call** inside `handleSubmit`:

```jsx
// BEFORE
addTodo(input)

// AFTER
addTodo(input, date) // <<< pass date
```

**Step 3 — Reset date** after submitting:

```jsx
// BEFORE
setInput('')
setIsExpanded(false)

// AFTER
setInput('')
setDate('') // <<< add this reset
setIsExpanded(false)
```

**Step 4 — Add the date picker** inside the form, below the text input:

```jsx
<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="px-4 py-3.5 border-2 border-google-yellow rounded-xl text-base outline-none bg-bg-card text-text-main"
/>
```

---

###  `App.jsx`

**What to do:** Update `addTodo` to accept and store the `date`:

```jsx
// BEFORE
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  }
  setTodos([...todos, newTodo])
}

// AFTER
const addTodo = (text, date) => {  // <<< add date parameter
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
    date,  // <<< store it in the todo object
  }
  setTodos([...todos, newTodo])
}
```

---

###  `TodoItem.jsx`

**What to do:** Show the due date below the todo text, but only if a date was set.

**Add this** inside the `<div className="flex-1">` block, right below the `<span>` for the todo text:

```jsx
// BEFORE
<div className="flex-1">
  <span className={...}>
    {todo.text}
  </span>
</div>

// AFTER
<div className="flex-1">
  <span className={...}>
    {todo.text}
  </span>

  {/* <<< Add this — only shows if a date exists */}
  {todo.date && (
    <p className="text-xs text-text-muted mt-0.5"> {todo.date}</p>
  )}
</div>
```

> 💡 **How it works:** `{todo.date && (...)}` means "only render this if `todo.date` is not empty". This way, todos without a date won't show the date line at all.

---
---

## Feature 3:  Categories / Tags
> Let users assign a category to each task. Add filter buttons to show only tasks from one category.

**Files to update:** `TodoInput.jsx` → `App.jsx` → `TodoList.jsx`

---

###  `TodoInput.jsx`

**What to do:** Add a `category` state and a `<select>` dropdown for category selection.

**Step 1 — Add the category state:**

```jsx
const [category, setCategory] = useState('Personal') // <<< add this
```

**Step 2 — Update the `addTodo` call:**

```jsx
// BEFORE
addTodo(input)

// AFTER
addTodo(input, category) // <<< pass category
```

**Step 3 — Reset after submit:**

```jsx
setCategory('Personal') // <<< add this reset
```

**Step 4 — Add the category dropdown** inside the form:

```jsx
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="px-4 py-3.5 border-2 border-google-yellow rounded-xl text-base outline-none bg-bg-card text-text-main"
>
  <option value="School"> School</option>
  <option value="Personal"> Personal</option>
  <option value="Work"> Work</option>
</select>
```

---

###  `App.jsx`

**What to do:** Add a `filter` state, filter buttons UI, and pass everything down to `TodoList`.

**Step 1 — Add the filter state** near the top alongside `todos`:

```jsx
const [todos, setTodos] = useState([])
const [filter, setFilter] = useState('All') // <<< add this ('All' shows everything)
```

**Step 2 — Update `addTodo`** to accept and store category:

```jsx
// BEFORE
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  }
  setTodos([...todos, newTodo])
}

// AFTER
const addTodo = (text, category) => {  // <<< add category parameter
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
    category,  // <<< store it
  }
  setTodos([...todos, newTodo])
}
```

**Step 3 — Add filter buttons** in the JSX, between `<Header />` and the main card `<div>`:

```jsx
// Add this between <Header /> and the main card div
<div className="flex gap-2 mb-4 flex-wrap">
  {['All', 'School', 'Personal', 'Work'].map(cat => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
        ${filter === cat
          ? 'bg-google-yellow text-white'
          : 'bg-bg-card text-text-muted hover:bg-bg-card-hover'
        }`}
    >
      {cat}
    </button>
  ))}
</div>
```

**Step 4 — Pass `filter` to `TodoList`:**

```jsx
// BEFORE
<TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />

// AFTER
<TodoList
  todos={todos}
  toggleComplete={toggleComplete}
  deleteTodo={deleteTodo}
  filter={filter}  // <<< pass filter down
/>
```

---

###  `TodoList.jsx`

**What to do:** Accept the `filter` prop and filter the todos array before rendering.

```jsx
// BEFORE
function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      ...
      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} ... />
        ))}
      </div>
    </div>
  )
}

// AFTER
function TodoList({ todos, toggleComplete, deleteTodo, filter }) {  // <<< add filter

  // <<< Add this — filter logic before the return
  const filteredTodos = filter === 'All'
    ? todos
    : todos.filter(todo => todo.category === filter)

  return (
    <div>
      ...
      <div className="flex flex-col gap-3">
        {filteredTodos.map((todo) => (  // <<< change todos.map to filteredTodos.map
          <TodoItem key={todo.id} todo={todo} ... />
        ))}
      </div>
    </div>
  )
}
```

> 💡 **How it works:** If `filter` is `'All'`, show all todos. Otherwise, use `.filter()` to only show todos whose `category` matches the selected filter.

---
---

## Feature 4: Dark / Light Mode Toggle
> Add a toggle button in the Header that switches the app between dark and light mode.

**Files to update:** `App.jsx` → `Header.jsx`

---

###  `App.jsx`

**What to do:** Add an `isDark` state and pass it to `Header` and use it to swap the background classes.

**Step 1 — Add the state:**

```jsx
const [todos, setTodos] = useState([])
const [isDark, setIsDark] = useState(true) // <<< add this (true = dark mode by default)
```

**Step 2 — Update the main container `<div>`** to conditionally apply background:

```jsx
// BEFORE
<div className="max-w-[480px] mx-auto py-8 px-4 min-h-screen" style={{ background: '#18191b' }}>

// AFTER
<div
  className={`max-w-[480px] mx-auto py-8 px-4 min-h-screen transition-colors ${isDark ? '' : 'bg-gray-100'}`}
  style={isDark ? { background: '#18191b' } : {}}
>
```

**Step 3 — Update the main card `<div>`:**

```jsx
// BEFORE
<div className="bg-bg-card rounded-3xl p-6 shadow-lg">

// AFTER
<div className={`rounded-3xl p-6 shadow-lg ${isDark ? 'bg-bg-card' : 'bg-white'}`}>
```

**Step 4 — Pass `isDark` and `setIsDark` to `<Header />`:**

```jsx
// BEFORE
<Header taskCount={todos.length} currentDate={getCurrentDate()} />

// AFTER
<Header
  taskCount={todos.length}
  currentDate={getCurrentDate()}
  isDark={isDark}         // <<< pass current mode
  setIsDark={setIsDark}  // <<< pass the setter so Header can toggle it
/>
```

---

###  `Header.jsx`

**What to do:** Accept `isDark` and `setIsDark` as props, then add a toggle button.

**Step 1 — Update the function signature:**

```jsx
// BEFORE
function Header({ taskCount, currentDate }) {

// AFTER
function Header({ taskCount, currentDate, isDark, setIsDark }) {  // <<< add new props
```

**Step 2 — Add the toggle button** inside the header, at the end of the `<div className="flex items-center justify-between">` container:

```jsx
// Add this as a sibling to the existing <div className="flex items-center gap-3">
<button
  onClick={() => setIsDark(!isDark)}
  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
>
  {isDark ? '☀️' : '🌙'}
</button>
```

> 💡 **How it works:** `setIsDark(!isDark)` flips the boolean — if it was `true`, it becomes `false`, and vice versa. The emoji also switches: ☀️ when dark (click to go light), 🌙 when light (click to go dark).

---
---

## Feature 5: Task Counter in Header
> Show how many tasks are completed vs. total (e.g. "3 / 5 Tasks Done").

**Files to update:** `App.jsx` → `Header.jsx`

---

###  `App.jsx`

**What to do:** Compute the completed count and pass it to `Header`.

**Step 1 — Add the derived count** before the `return`:

```jsx
// Add this before the return statement
const completedCount = todos.filter(t => t.completed).length
// ^^^ .filter() keeps only todos where completed === true, then .length counts them
```

**Step 2 — Pass it to `<Header />`:**

```jsx
// BEFORE
<Header taskCount={todos.length} currentDate={getCurrentDate()} />

// AFTER
<Header
  taskCount={todos.length}
  currentDate={getCurrentDate()}
  completedCount={completedCount}  // <<< pass the count
/>
```

---

###  `Header.jsx`

**What to do:** Accept `completedCount` as a prop and update the display.

**Step 1 — Update the function signature:**

```jsx
// BEFORE
function Header({ taskCount, currentDate }) {

// AFTER
function Header({ taskCount, currentDate, completedCount }) {  // <<< add completedCount
```

**Step 2 — Update the `<h2>`** to show the counter:

```jsx
// BEFORE
<h2 className="text-2xl font-semibold mb-1">
  {taskCount} {taskCount === 1 ? 'Task' : 'Tasks'}
</h2>

// AFTER
<h2 className="text-2xl font-semibold mb-1">
  {completedCount} / {taskCount} {taskCount === 1 ? 'Task' : 'Tasks'} Done
</h2>
```

> 💡 **How it works:** `completedCount` is a "derived state" — it's not stored in `useState`, it's just calculated from the `todos` array every time the component re-renders. This keeps things simple and always in sync.

---
---

## Feature 6:  Edit a Task
> Let users double-click on a todo item's text to edit it inline.

**Files to update:** `App.jsx` → `TodoList.jsx` → `TodoItem.jsx`

---

###  `App.jsx`

**What to do:** Add an `editTodo` function and pass it down to `TodoList`.

**Step 1 — Add the `editTodo` function** alongside the other handlers:

```jsx
// Add this alongside toggleComplete and deleteTodo
const editTodo = (id, newText) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, text: newText } : todo
    // ^^^ find the matching todo by id, update its text, keep everything else the same
  ))
}
```

**Step 2 — Pass it to `TodoList`:**

```jsx
// BEFORE
<TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />

// AFTER
<TodoList
  todos={todos}
  toggleComplete={toggleComplete}
  deleteTodo={deleteTodo}
  editTodo={editTodo}  // <<< pass it down
/>
```

---

###  `TodoList.jsx`

**What to do:** Accept `editTodo` and pass it to each `TodoItem`.

```jsx
// BEFORE
function TodoList({ todos, toggleComplete, deleteTodo }) {
  ...
  <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />

// AFTER
function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {  // <<< add editTodo
  ...
  <TodoItem
    key={todo.id}
    todo={todo}
    toggleComplete={toggleComplete}
    deleteTodo={deleteTodo}
    editTodo={editTodo}  // <<< pass it to each item
  />
```

---

###  `TodoItem.jsx`

**What to do:** Add editing state and toggle between a `<span>` (view mode) and `<input>` (edit mode) on double-click.

**Step 1 — Add the useState import** at the top if not already there:

```jsx
import { useState } from 'react'
```

**Step 2 — Update the function signature:**

```jsx
// BEFORE
function TodoItem({ todo, toggleComplete, deleteTodo }) {

// AFTER
function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {  // <<< add editTodo
```

**Step 3 — Add editing states** at the top of the component:

```jsx
const [isEditing, setIsEditing] = useState(false)       // tracks if we're in edit mode
const [editText, setEditText] = useState(todo.text)     // tracks the current input value
```

**Step 4 — Add handler functions:**

```jsx
// Saves the edit
const handleEditSave = () => {
  if (editText.trim() === '') return  // don't save empty text
  editTodo(todo.id, editText)         // call the function from App.jsx
  setIsEditing(false)                 // exit edit mode
}

// Handles keyboard shortcuts
const handleKeyDown = (e) => {
  if (e.key === 'Enter') handleEditSave()   // Enter = save
  if (e.key === 'Escape') setIsEditing(false) // Escape = cancel
}
```

**Step 5 — Replace the `<span>`** with a toggle between input and span:

```jsx
// BEFORE
<span className={`text-base transition-all ${todo.completed ? 'text-text-muted line-through' : 'text-text-main'}`}>
  {todo.text}
</span>

// AFTER
{isEditing ? (
  // Edit mode — show an input field
  <input
    autoFocus
    value={editText}
    onChange={(e) => setEditText(e.target.value)}
    onBlur={handleEditSave}       // save when clicking away
    onKeyDown={handleKeyDown}     // save on Enter, cancel on Escape
    className="w-full bg-transparent border-b border-google-yellow text-text-main outline-none text-base"
  />
) : (
  // View mode — show the text, double-click to edit
  <span
    onDoubleClick={() => setIsEditing(true)}
    className={`text-base transition-all ${todo.completed ? 'text-text-muted line-through' : 'text-text-main'}`}
  >
    {todo.text}
  </span>
)}
```

> 💡 **How it works:** `isEditing` acts like a switch. When `false`, the user sees the todo text as a `<span>`. When they double-click it, `isEditing` flips to `true` and the `<span>` is replaced with an `<input>`. When they press Enter or click away (`onBlur`), `handleEditSave` runs — it calls `editTodo` to update the todo in `App.jsx`, then sets `isEditing` back to `false`.

---

*GDG PUP — React & Tailwind CSS Study Jam Answer Key *