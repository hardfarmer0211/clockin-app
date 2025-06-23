const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Cho phép nhận dữ liệu JSON từ client

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Đã kết nối MongoDB"))
  .catch(err => console.log("❌ Lỗi khi kết nối MongoDB:", err));

// Routes
app.use('/api/auth', authRoute);  // Đăng ký & Đăng nhập

// Khởi động server
