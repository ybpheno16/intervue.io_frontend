# 🧑‍🎓 Live Polling Frontend (React + Socket.io + MUI)

This is the **frontend** for a live polling application where a **teacher** can create polls and **students** can vote and view results in real-time.

---

## 🚀 Features

### 👨‍🏫 Teacher
- Choose the teacher role and create new polls
- View live voting stats
- Restrict new polls unless the previous one is completed

### 👨‍🎓 Student
- Enter a unique name per tab
- Answer questions within 60 seconds
- See live poll results after submission or timeout

---

## 🛠️ Tech Stack
- **React.js**
- **Socket.io-client**
- **Material UI (MUI)**
- **Vite** (for fast build/dev experience)

---

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/live-poll-frontend.git
cd live-poll-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Update Backend Socket URL
In `App.jsx`, set your deployed backend URL:
```js
const socket = io("https://your-backend-url.onrender.com");
```

### 4. Run the Frontend Locally
```bash
npm run dev
```

The app will run on `http://localhost:5173`.

---

## 🌐 Deployment

To deploy the frontend (e.g., on Vercel):
- Push the project to GitHub
- Go to [https://vercel.com](https://vercel.com)
- Import your GitHub repo and click **Deploy**

---

## 🗂️ Project Structure

- `/components/RoleSelection.jsx` – UI to select teacher or student
- `/components/Teacher.jsx` – UI and logic for teachers to launch polls
- `/components/Student.jsx` – Handles student registration and voting

---

## 🔗 Live Demo

Frontend: `https://your-frontend.vercel.app`  
Backend: `https://your-backend.onrender.com`

---

## ✍️ Author

Made with ❤️ by Yashendra Badal  
[LinkedIn](https://www.linkedin.com/in/yashendrabadal/) | [GitHub](https://github.com/ybpheno16)

---

## 📜 License

This project is licensed for educational use.
