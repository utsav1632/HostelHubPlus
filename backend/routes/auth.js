// routes/auth.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user/user');
const Caretaker = require('../models/caretaker/caretaker.js');
const Warden = require('../models/warden/warden.js');
const Student = require('../models/student/student.js');

require('dotenv').config();

const auth_router = express.Router();

// Login route
auth_router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Include hostel ID in the response
    let hostelId = null;
if (user.role === 'caretaker') {
  const caretaker = await Caretaker.findOne({ _id: user._id }).lean();
  // console.log("Found Caretaker:", caretaker);
  if (caretaker && caretaker.hostel) {
    hostelId = caretaker.hostel;
  }
} else if (user.role === 'warden') {
  const warden = await Warden.findOne({ _id: user._id }).lean();
  // console.log("Found Warden:", warden);
  if (warden && warden.hostel) {
    hostelId = warden.hostel;
  }
} else if (user.role === 'student') {
  const student = await Student.findOne({ _id: user._id }).lean();
  // console.log("Found Student:", student);
  if (student && student.hostel) {
    hostelId = student.hostel;
  }
}

    // console.log('hostelId from DB:', hostelId);

    // Generate token
    const token = jwt.sign(
      { userId: user._id, role: user.role, hostelId },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: '20h' }
    );

    // Send token, userId, and role in response
    res.json({
      token,
      userId: user._id,
      username: user.username,
      role: user.role,
      hostelId
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Logout route
auth_router.delete('/logout', async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).send('User logout');
  } catch (error) {
    console.log('Logout error:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = auth_router;
