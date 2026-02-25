# 🚀 Post-Jam Activity: Extend the Sparky Todo App
**GDG PUP React & Tailwind CSS Study Jam**

Welcome, Cadet! You've just learned the fundamentals of React and Tailwind CSS. Now it's time to put that knowledge to the test. 🐾

---

## Your Mission

The **Sparky Todo App** works — but it's missing some features. Your task is to **extend it by adding 3 to 5 NEW FEATURES** using everything you learned today:

- **React** — Components, Props, `useState`, `useEffect`
- **Tailwind CSS** — Utility classes, Google color theme

---

## 💡 Feature Ideas (Pick minimum of 2!)

### Feature 1: Priority Levels
Let users tag tasks as **High**, **Medium**, or **Low** priority. Show a colored badge on each todo item.

> **What you'll practice:** Props, useState, conditional Tailwind classes
>
> **Files to edit:** `TodoInput.jsx`, `TodoItem.jsx`
>
> **Hint:** Add a `<select>` dropdown in `TodoInput`. Store a `priority` field in the todo object. In `TodoItem`, render a badge using conditional classes:
> - `text-google-red` → High
> - `text-google-yellow` → Medium
> - `text-google-green` → Low

---

### Feature 2: Due Dates
Let users set a due date when adding a task. Display it on the todo item.

> **What you'll practice:** Props, useState, controlled inputs
>
> **Files to edit:** `TodoInput.jsx`, `TodoItem.jsx`
>
> **Hint:** Add a `<input type="date" />` in `TodoInput`. Pass the date value into the `addTodo()` function alongside the text. Display it in `TodoItem`.

---

### Feature 3: Categories / Tags
Let users assign a category to each task (e.g. School, Personal, Work). Add filter buttons to show only tasks from one category.

> **What you'll practice:** Props, useState, array filtering, component communication
>
> **Files to edit:** `TodoInput.jsx`, `App.jsx`, `TodoList.jsx`
>
> **Hint:** Add a `category` field to each todo object. In `App.jsx`, add a `filter` state and pass it down. In `TodoList.jsx`, filter the todos array before rendering.

---

### Feature 4: Dark / Light Mode Toggle
Add a toggle button in the Header that switches the app between dark and light mode.

> **What you'll practice:** useState, props, conditional Tailwind classes
>
> **Files to edit:** `Header.jsx`, `App.jsx`
>
> **Hint:** Create an `isDark` state in `App.jsx`. Pass it as a prop to `Header` and to the main container div. Swap background and text classes conditionally using a ternary:
> ```jsx
> className={isDark ? "bg-bg-card" : "bg-white"}
> ```

---

### Feature 5: Task Counter per Category
Show how many tasks are completed vs. total in the Header (e.g. "3 / 5 Tasks Done").

> **What you'll practice:** Props, derived state, conditional rendering
>
> **Files to edit:** `Header.jsx`, `App.jsx`
>
> **Hint:** In `App.jsx`, compute the count of completed todos:
> ```js
> const completedCount = todos.filter(t => t.completed).length
> ```
> Pass both `completedCount` and `todos.length` as props to `Header` and display them.

---

### Feature 6: Edit a Task
Let users click on a todo item's text to edit it inline.

> **What you'll practice:** useState, controlled inputs, conditional rendering
>
> **Files to edit:** `TodoItem.jsx`
>
> **Hint:** Add an `isEditing` state inside `TodoItem`. When `true`, show an `<input>` instead of the `<span>`. On blur or Enter key, save the new value and call a new `editTodo(id, newText)` function passed down as a prop from `App.jsx`.

---

## How to Do It

1. **Pick min of 2 features** from the list above
2. **Read the hints** — they point you to the right files and concepts
3. **Edit the files** — don't be afraid to break things and fix them!
4. **Use Tailwind** — style your new UI elements using the Google colors already set up:

   | Class | Color |
   |---|---|
   | `text-google-blue` / `bg-google-blue` | #4285f4 |
   | `text-google-red` / `bg-google-red` | #ea4335 |
   | `text-google-yellow` / `bg-google-yellow` | #fbbc04 |
   | `text-google-green` / `bg-google-green` | #34a853 |

---

## Success Criteria

- [ ] **min of 2 Features Added** — all chosen features are functional, not just partially working
- [ ] **Components Used Correctly** — new UI is built inside the right component files
- [ ] **Props Passed Properly** — data flows correctly from parent to child
- [ ] **Hooks Used Where Needed** — `useState` and/or `useEffect` used appropriately
- [ ] **Tailwind Styled** — new elements are styled and match the GDG dark theme
- [ ] **Original Features Still Work** — add, complete, and delete todos still function
- [ ] **Clean Code** — properly indented, no leftover `console.log`s or unused variables

---

##  File Structure

```
src/
├── App.jsx              ← Main state & logic (useState, useEffect live here)
├── index.css            ← Tailwind setup & Google color theme
└── components/
    ├── Header.jsx       ← Top card with Sparky logo & task count
    ├── TodoInput.jsx    ← Input form & floating add button
    ├── TodoItem.jsx     ← Individual todo row (checkbox, text, delete)
    └── TodoList.jsx     ← Renders the list or the empty state
```

---

## Tips

- **Start small** — get one feature working before starting the next
- **Use `console.log()`** — log your state to check if data is flowing correctly
- **Props flow down** — if a child component needs data, pass it from the parent
- **Tailwind arbitrary values** — need a custom color? Use `bg-[#hexcode]` syntax
- **Check the console** — open Browser DevTools (`F12`) to catch errors early

---

## How to Run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

Good luck, Cadet! Sparky is rooting for you. 🫡s