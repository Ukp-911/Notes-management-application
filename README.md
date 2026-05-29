# NotesVault

A fast, reliable, and fully client-side notes management application built with React and Redux Toolkit. NotesVault lets you create, view, edit, and delete notes — all persisted in your browser's local storage with zero backend dependency.

---

## Features

- **Create Notes** — Add notes with a title and content instantly
- **View Notes** — Read your notes in a clean focused modal
- **Edit Notes** — Update existing notes with real-time Redux sync
- **Delete Notes** — Remove notes instantly with state and storage sync
- **Persistent Storage** — Notes survive page refreshes via localStorage
- **Toast Notifications** — Instant feedback on every user action
- **No Account Required** — Fully offline, no server, no signup

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI and component architecture |
| Redux Toolkit | Global state management |
| React Router DOM | Client-side routing |
| React Hot Toast | Toast notifications |
| LocalStorage | Data persistence |
| Vite | Build tool and dev server |

---

## Project Structure
src/
├── components/
│   ├── btncomponents/
│   │   ├── btncomps.jsx       # View/Edit modal component
│   │   └── btncomps.css
│   ├── homepage/
│   │   ├── Homepage.jsx       # Create note page
│   │   └── homepage.css
│   ├── viewpastes/
│   │   ├── Viewpastes.jsx     # All notes listing page
│   │   └── viewpastes.css
│   ├── about/
│   │   ├── About.jsx          # About page
│   │   └── about.css
│   ├── Layout.jsx             # Root layout with Navbar
│   ├── layout.css
│   ├── Navbar.jsx             # Navigation bar
│   └── navbar.css
├── pasteslice.jsx             # Redux slice (actions + reducers)
├── store.jsx                  # Redux store configuration
├── App.jsx                    # Route definitions
└── main.jsx                   # App entry point

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or above)
- npm or yarn

### Installation

1. Clone the repository
git clone https://github.com/yourusername/notesvault.git

2. Navigate to the project directory
cd notesvault

3. Install dependencies
npm install

4. Start the development server
npm run dev

5. Open your browser and visit
http://localhost:5173

---

## How It Works

### State Management

NotesVault uses Redux Toolkit as the single source of truth for all note data. Every create, update, and delete operation goes through a Redux action — components never interact with localStorage directly.
Component → dispatch(action) → Redux Slice → localStorage
Component ← useSelector     ← Redux Store

### Data Persistence

On every state change, the entire notes array is serialized with JSON.stringify and saved to localStorage. On app load, Redux initializes its state by reading from localStorage via JSON.parse.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Roadmap

- [ ] Search and filter notes
- [ ] Note categories and tags
- [ ] Rich text editor support
- [ ] Export notes as PDF or markdown
- [ ] Cloud sync with user authentication

---

## License

This project is licensed under the MIT License.

---

> Your thoughts are valuable — NotesVault makes sure they are never lost.
