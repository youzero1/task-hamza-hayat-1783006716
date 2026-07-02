---
status: pending
title: Simple Todo App
---

1. Update `/app/src/pages/Home.tsx` to be the main todo page.
   - Render a centered card layout with a heading ("My Tasks"), a task input row (text field + Add button), and a list of tasks below it.
   - Use local component state to hold the list of todos (each todo has an id, text, and completed flag).
   - Show an empty state message when there are no tasks yet (e.g. "No tasks yet — add one above").
   - Expected outcome: visiting the app shows a clean todo interface with an input and empty state.

2. Add task creation behavior in `/app/src/pages/Home.tsx`.
   - Typing in the input and clicking Add (or pressing Enter) appends a new task to the list and clears the input.
   - Ignore empty or whitespace-only submissions.
   - Expected outcome: users can add new tasks that appear immediately in the list.

3. Add task completion + deletion behavior in `/app/src/pages/Home.tsx`.
   - Each task row shows a checkbox, the task text, and a delete button (e.g. "×").
   - Clicking the checkbox toggles the completed state; completed tasks show with strikethrough and muted color.
   - Clicking delete removes that task from the list.
   - Expected outcome: users can mark tasks done/undone and remove tasks.

4. Add a footer summary + "Clear completed" action in `/app/src/pages/Home.tsx`.
   - Show a small footer beneath the list with the count of remaining (incomplete) tasks (e.g. "3 tasks left").
   - Include a "Clear completed" button that removes all completed tasks; hide it when there are none completed.
   - Expected outcome: users see progress at a glance and can bulk-remove finished tasks.

5. Persist todos to localStorage in `/app/src/pages/Home.tsx`.
   - On mount, load the saved list from localStorage (if any).
   - On every change to the list, save it back to localStorage.
   - Expected outcome: tasks survive page reloads.

6. Style the page with Tailwind CSS v4 utilities in `/app/src/pages/Home.tsx`.
   - Full-height page with a soft background gradient, centered card with rounded corners, subtle shadow, and comfortable padding.
   - Input and buttons styled with hover/focus states; primary Add button in an accent color.
   - Task rows with dividers, hover highlight, and smooth transitions on completion.
   - Responsive layout that looks good on mobile and desktop.
   - Expected outcome: polished, modern-looking todo app.

7. Ensure `/app/src/App.tsx` renders the Home page and that `/app/src/main.tsx` imports `/app/src/styles/global.css` (which begins with the Tailwind import).
   - Expected outcome: the app boots cleanly with styles applied.
