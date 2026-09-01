# Langa & Co - Starter Full-Stack Website

Langa & Co website

This workspace contains a minimal full-stack scaffold for Langa & Co: a modern, Squarespace-like responsive site (React + Tailwind) and a simple Node/Express API.

Quick start

1. Frontend

```bash
cd frontend
npm install
npm run dev
```

2. Backend

```bash
cd backend
npm install
node index.js
```

Notes
- The frontend uses Vite + React + Tailwind. Adjust colors in `frontend/src/index.css`.
- The backend exposes a simple API at `http://localhost:4000/api/services` and a POST `api/contact` endpoint (logs received data).
- Update `.env` in `backend` to configure SMTP or production settings when ready.

