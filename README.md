# ToDoList
A simple To-Do List web application built using HTML, CSS, and JavaScript. It helps users add and manage daily tasks with an easy and responsive interface.
# My To Do List 📝

A simple, pink-aesthetic to-do list app built with plain HTML, CSS, and JavaScript. Tasks are saved in the browser's `localStorage`, so your list is still there when you close and reopen the page.

## Features

- ➕ Add new tasks (click **Add** or just press **Enter**)
- ✏️ Edit existing tasks in place
- ☑️ Mark tasks as complete (shows a strikethrough)
- 🗑️ Remove tasks
- 💾 Tasks persist across page reloads using `localStorage`
- 🌸 Soft pink theme with a gentle drifting background pattern and pop-in animation for new tasks

## Tech Stack

- HTML5
- CSS3 (no frameworks)
- Vanilla JavaScript (no libraries)

## File Structure

```
├── index.html      # Page structure
├── style.css       # Styling, theme, and animations
└── script.js       # App logic (add / edit / complete / remove / localStorage)
```

## Running Locally

No build step or dependencies needed. Just open `index.html` in your browser:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
open index.html   # or just double-click the file
```

## Notes

- Task data is stored locally in your browser only — it isn't synced anywhere, so clearing your browser storage will clear your tasks.
- If you previously used an older version of this app, your saved tasks were stored in a different format and may need to be cleared once after this update (open your browser's DevTools → Application/Storage tab → clear `localStorage` for this site).

## License

Free to use and modify.