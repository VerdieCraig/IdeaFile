# 🗂️ IdeaFile

**IdeaFile** is a full-stack MERN application for capturing and organizing personal notes, ideas, and inspirations. Built with productivity in mind, IdeaFile offers a clean interface, persistent storage, and rate-limiting to prevent API abuse.

> ⚠️ Note: The live demo is hosted on [Render](https://render.com/) using the free tier. It may take up to **one minute** to spin up if the server has gone idle.

---

## 🚀 Live Demo

👉 [https://ideafile.onrender.com](https://ideafile.onrender.com)

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (Atlas)
- **Rate Limiting**: Upstash Ratelimit + Redis
- **Deployment**: Render + GitHub

---

## 🧪 Features

- Add, edit, and delete notes
- View all notes in a responsive grid
- Backend API with RESTful routes
- MongoDB for persistent storage
- Rate limiting to prevent abuse
- Frontend served from backend in production

---

## 🧰 Getting Started Locally

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB URI (local or Atlas)

### Clone & Run

```bash
git clone https://github.com/VerdieCraig/IdeaFile.git

cd IdeaFile

1. Set up backend
cd backend
cp .env.example .env  # or create your own .env
npm install
npm run dev

2. Set up frontend (in a new terminal)
cd frontend
npm install
npm run dev

Frontend runs on http://localhost:5173, backend on http://localhost:3000.

```

---

## 📦 Build for Production
To build and serve the frontend from the backend:
```bash
cd frontend
npm run build
Then start the backend with:

cd ../backend
NODE_ENV=production npm start

```

---

## 📝 License
MIT — free to use, modify, and distribute.

---

## 🙋‍♀️ Author
Built by Verdie A. Craig
*based on a MERN Stack tutorial from Free Code Camp,
located at https://www.youtube.com/watch?v=F9gB5b4jgOI
