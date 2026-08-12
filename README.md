# 🚀 Actodo — Todo Management App

A modern and responsive Todo Management application built with **React.js** and **Tailwind CSS**.

Actodo allows users to create an account, log in, manage daily activities, track completed and pending tasks, view live date and time, and log out through a clean dashboard interface.

---

## 🌐 Live Demo

**GitHub Repository:**  
https://github.com/mukeshmannai14/Actodo-App

**Live Website:**  
https://actodo-app-one.vercel.app/

---

## 📖 About The Project

Actodo is a frontend Todo Management application created to practice and demonstrate modern React development.

The application follows a simple authentication flow:

**Signup → Login → Dashboard → Manage Todos → Logout**

After creating an account, the user can log in and access a personalized dashboard.

The dashboard includes:

- Personalized username
- Live current time
- Current date
- Built-with technology information
- Total activities
- Pending activities
- Completed activities
- Add Todo form
- Today's activity list
- Complete Todo functionality
- Delete Todo functionality
- Logout functionality

---

# ✨ Features

## 🔐 Authentication

- Create a new account
- Login with username and password
- Basic form validation
- Display login errors
- Personalized dashboard
- Logout functionality

## 📝 Todo Management

- Add new activities
- View today's activities
- Mark activities as completed
- Unmark completed activities
- Delete activities
- Automatically update activity statistics

## 📊 Dashboard

- Personalized welcome message
- Logged-in username
- Live time
- Current date
- Total activity count
- Pending activity count
- Completed activity count
- React + Tailwind CSS technology card

## 🎨 UI & UX

- Modern dashboard interface
- Responsive design
- Mobile-friendly layout
- Gradient backgrounds
- Rounded cards
- Clean typography
- Interactive buttons
- Hover effects
- Responsive activity cards

---

# 🔄 Application Flow

```text
                 ┌─────────────────┐
                 │   Open Actodo   │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │     Signup      │
                 │ Create Account  │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │      Login      │
                 │ Username/Pass   │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │    Dashboard    │
                 │     Landing     │
                 └────────┬────────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
              ▼           ▼           ▼
          Add Todo    Complete Todo  Delete Todo
              │           │           │
              └───────────┼───────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Activity Stats  │
                 │ Total/Pending/  │
                 │    Completed    │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │      Logout     │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │      Login      │
                 └─────────────────┘
```

---

# 🧑‍💻 How To Use

## Step 1 — Create an Account

First, open the Actodo application and go to the **Signup** page.

Enter:

- Username
- Password
- Confirm Password

Then create your account.

## Step 2 — Login

After creating your account, go to the **Login** page.

Enter the username and password you created.

Click **Login**.

## Step 3 — Open Dashboard

After successful login, you will be redirected to the dashboard.

You can see:

- Your username
- Current time
- Current date
- Activity statistics
- Today's activities

## Step 4 — Add Activities

Enter an activity in the Todo input box.

Examples:

```text
Complete React Project
Practice JavaScript
Learn Tailwind CSS
Practice DSA
Update GitHub
Prepare for Interview
```

Click **Add Activity**.

## Step 5 — Complete Activities

Click the complete button on an activity when you finish it.

The completed activity count will automatically update.

## Step 6 — Delete Activities

Use the delete button to remove an activity from the list.

## Step 7 — Logout

Click the **Logout** button when you want to leave the dashboard.

You will be redirected to the Login page.

---

# 🏠 Dashboard

The Actodo dashboard contains several dedicated cards.

## 🕐 Time Card

Displays the current time and updates automatically.

Example:

```text
Current Time

09:35:24 PM
```

## 📅 Date Card

Displays the current date.

Example:

```text
Today's Date

Wednesday, 12 August 2026
```

## 💻 Built With Card

Displays the main technologies used in the application.

```text
Built With

React + Tailwind CSS
```

## 📋 Total Activities

Displays the total number of Todo activities.

## ⏳ Pending Activities

Displays activities that are not completed.

## ✅ Completed Activities

Displays activities that have been completed.

---

# 📂 Project Structure

```text
Actodo-App/
│
├── public/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   │
│   ├── components/
│   │   ├── AddTodoForm.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoItem.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Landing.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> The exact component/file structure can vary depending on the current project implementation.

---

# 🧩 Component Architecture

The application is divided into reusable React components.

```text
App
│
├── Login
│
├── Signup
│
└── Landing
     │
     ├── AddTodoForm
     │
     └── TodoList
           │
           └── TodoItem
```

---

# ⚛️ React Concepts Used

## Components

The application uses reusable React components for different sections of the application.

Main components include:

- Login
- Signup
- Landing
- AddTodoForm
- TodoList
- TodoItem

## useState

`useState()` is used to manage application state.

Example:

```jsx
const [todos, setTodos] = useState([]);
```

It can be used for:

- Todo state
- User state
- Form values
- Current time
- Application data

## useEffect

`useEffect()` is used for side effects such as updating the live time.

Example:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

## Props

Props are used to pass data and functions between components.

Example:

```jsx
<TodoList
  todos={todos}
  deleteTodo={deleteTodo}
  toggleTodo={toggleTodo}
/>
```

## Conditional Rendering

Conditional rendering is used for:

- Login errors
- Empty Todo lists
- Completed activities
- Pending activities
- User-specific dashboard content

---

# 📝 Todo Data Flow

```text
AddTodoForm
      │
      │ addTodo()
      ▼
   Landing
      │
      │ todos
      ▼
  TodoList
      │
      ▼
  TodoItem
      │
      ├── Complete
      │
      └── Delete
```

The main Todo state is managed by the parent component and passed to child components through props.

---

# 📊 Activity Statistics

The dashboard calculates activity statistics dynamically.

## Total

```jsx
const totalTasks = todos.length;
```

## Completed

```jsx
const completedTasks = todos.filter(
  (todo) => todo.completed
).length;
```

## Pending

```jsx
const pendingTasks = todos.filter(
  (todo) => !todo.completed
).length;
```

The statistics update when activities are added, completed, or deleted.

---

# ⏰ Live Date & Time

The dashboard displays the current date and time.

The time is updated every second using `useEffect()` and `setInterval()`.

Example:

```jsx
currentTime.toLocaleTimeString()
```

Date:

```jsx
currentTime.toLocaleDateString()
```

---

# 🚪 Logout

The dashboard provides a Logout button.

The logout action clears the current user state and redirects the user back to the Login page.

Example:

```jsx
function handleLogout() {
  setLoggedUser(null);
  navigate("/");
}
```

---

# 🎨 Tailwind CSS

Tailwind CSS is used to create the application's user interface.

Examples of Tailwind utility classes include:

```text
flex
grid
gap-5
rounded-3xl
bg-gradient-to-br
text-white
shadow-xl
backdrop-blur-lg
transition
hover:
md:grid-cols-3
```

The UI uses utility-first styling to create a responsive and modern interface.

---

# 📱 Responsive Design

Actodo is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Example responsive Tailwind class:

```jsx
className="grid gap-5 md:grid-cols-3"
```

This allows the layout to adapt to different screen sizes.

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Frontend application |
| JavaScript | Application logic |
| Tailwind CSS | UI styling |
| React Router | Page navigation |
| Vite | Development and build tool |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Deployment |

---

# 🚀 Deployment

The project is intended to be deployed through GitHub Pages.

Repository:

https://github.com/mukeshmannai14/Actodo-App

After creating a production build, deploy according to the project's configured GitHub Pages workflow.

---

# 🧪 Testing Checklist

## Authentication

- [ ] Signup with a new username
- [ ] Enter password
- [ ] Confirm password
- [ ] Login with valid credentials
- [ ] Check invalid login credentials
- [ ] Display logged-in username
- [ ] Logout successfully

## Dashboard

- [ ] Username displays correctly
- [ ] Current time updates
- [ ] Current date displays correctly
- [ ] Built With card displays correctly
- [ ] Total activities display correctly
- [ ] Pending activities display correctly
- [ ] Completed activities display correctly

## Todo

- [ ] Add Todo
- [ ] Add multiple Todos
- [ ] Complete Todo
- [ ] Uncomplete Todo
- [ ] Delete Todo
- [ ] Check statistics after each action

## Responsive Design

- [ ] Desktop layout
- [ ] Tablet layout
- [ ] Mobile layout
- [ ] Buttons are accessible
- [ ] Cards fit correctly
- [ ] No horizontal overflow

---


# 🔐 Authentication Note

The current application uses frontend/client-side authentication logic for learning purposes.

It is **not intended to provide production-level secure authentication**.

A production-ready application should use:

- Backend authentication
- Secure password handling
- Database storage
- JWT or secure sessions
- Server-side validation
- Protected routes

---


# 🎓 Learning Outcomes

This project helped me practice:

- React component development
- React Hooks
- State management
- Props
- Event handling
- Form handling
- Conditional rendering
- React Router
- Tailwind CSS
- Responsive UI development
- Git
- GitHub
- Deployment

The project also helped me understand how reusable React components can work together to build a complete frontend application.

---

# 📌 Project Highlights

```text
⚛️ React.js
🎨 Tailwind CSS
🔐 Signup & Login
👤 Personalized Dashboard
📝 Todo Management
➕ Add Activities
✅ Complete Activities
🗑️ Delete Activities
📊 Activity Statistics
🕐 Live Time
📅 Current Date
🚪 Logout
📱 Responsive Design
🚀 GitHub Deployment
```

---

# 📸 Dashboard Overview

```text
┌─────────────────────────────────────────────────────────┐
│  ✓ Actodo                         User 👋       Logout  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Good to see you! 👋                                  │
│  Stay organized and make today productive.             │
│                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐  │
│  │ 🕐 Time     │ │ 📅 Date     │ │ 💻 Built With  │  │
│  │ Live Time   │ │ Today       │ │ React +         │  │
│  │             │ │             │ │ Tailwind CSS   │  │
│  └─────────────┘ └─────────────┘ └─────────────────┘  │
│                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐  │
│  │ 📋 Total    │ │ ⏳ Pending  │ │ ✅ Completed    │  │
│  │      5      │ │      2      │ │       3         │  │
│  └─────────────┘ └─────────────┘ └─────────────────┘  │
│                                                         │
│  Add Today's Activity                                  │
│                                                         │
│  ┌──────────────────────────────────────┐ ┌─────────┐ │
│  │ Enter your activity...               │ │  Add    │ │
│  └──────────────────────────────────────┘ └─────────┘ │
│                                                         │
│  Today's Activities                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```


# 👨‍💻 Developer

## Mukesh Kanna

**Frontend / Full Stack Developer**

Currently building skills in:

- HTML
- CSS
- JavaScript
- React.js
- Tailwind CSS
- Node.js
- Full Stack Development

---

# ⭐ Support

If you like this project, please consider giving the repository a ⭐ on GitHub.

Your support motivates me to keep learning, building, and improving.

---

# ❤️ Actodo

**Organize your day.**

**Complete your goals.**

**Stay productive.**

Built with ❤️ using:

**React.js + Tailwind CSS**

---

# 📄 License

This project was created for educational and portfolio purposes.

© 2026 Mukesh Mannai. All Rights Reserved.
