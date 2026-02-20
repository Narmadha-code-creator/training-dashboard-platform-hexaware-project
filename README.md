📌 Project Overview
This project was built to create a scalable and secure coding ecosystem where users can:
Register and log in securely
Attempt coding challenges
Track recent activity and reports
Access role-based features (Admin/User)
The system follows MVC architecture and RESTful API design principles.
🛠️ Tech Stack
Frontend
React.js
Vite
Axios
React Router
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Bcrypt
📂 Project Structure
Copy code

maverick-platform/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── App.jsx
│   └── package.json
│
└── README.md
🔐 Features
Secure User Registration & Login
JWT-Based Authentication
Protected Routes
Dashboard with Recent Reports
RESTful API Communication
Scalable and Modular Architecture
⚙️ Installation & Setup
1️⃣ Clone Repository
Copy code

git clone https://github.com/your-username/maverick-platform.git
cd maverick-platform
2️⃣ Setup Backend
Copy code

cd backend
npm install
Create a .env file:
Copy code

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
Run backend:
Copy code

npm start
3️⃣ Setup Frontend
Open new terminal:
Copy code

cd frontend
npm install
npm run dev
Frontend runs on:
Copy code

http://localhost:5173
Backend runs on:
Copy code

http://localhost:5000
🔄 Application Flow
User Login → Backend Verification → JWT Token Generated → Token Stored → Redirect to Dashboard → Fetch User Reports → Display Data
🚀 Future Improvements
Real-time coding execution engine
Leaderboard system
AI-based skill analysis
Cloud deployment (Render / Vercel)
👩‍💻 Author
S.D. Narmadha
Full Stack Developer | MERN Stack Enthusiast
