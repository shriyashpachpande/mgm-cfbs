// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const bodyParser = require('body-parser');


// const app = express();
// const PORT = process.env.PORT || 1432;

// // DB Connection

// mongoose.connect("mongodb+srv://shriyashpachpande813:ZgpLXSPZOKUycVsO@facility-booking.luwa2fp.mongodb.net/facility-booking?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB connected successfully"))
// .catch((err) => console.error("❌ MongoDB connection error:", err));


// // Middleware
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // ← Add this line
// app.use(express.static(path.join(__dirname, 'public_folder')));

// app.use(session({
//   secret: 'mySecretKey', // 🔐 use env var in real apps
//   resave: false,
//   saveUninitialized: true
// }));

// // Routes
// const authRoutes = require('./routes/authRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const contactRoutes = require('./routes/contactRoutes'); // ← Added

// app.use(authRoutes);
// app.use('/book', bookingRoutes);
// app.use('/admin', adminRoutes);
// app.use(contactRoutes); // ← Added

// // Default route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public_folder', 'login.html'));
// });

// // Automatically add loged user studentID

// app.get('/auth/me', (req, res) => {
//   if (!req.session || !req.session.user) {
//       return res.status(401).json({ message: 'Not logged in' });
//   }
//   res.json({
//       studentId: req.session.user.studentId,
//       studentName: req.session.user.studentName
//   });
// });

// // Logout
// app.get('/logout', (req, res) => {
//   req.session.destroy(err => {
//     if (err) return res.status(500).send("Logout failed");
//     res.redirect('/login.html');
//   });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

































const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 1432;

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://shriyashpachpande813:ZgpLXSPZOKUycVsO@facility-booking.luwa2fp.mongodb.net/facility-booking?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public_folder')));

app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

// ✅ Routes
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/adminRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use(authRoutes);
app.use('/book', bookingRoutes);
app.use('/admin', adminRoutes);
app.use(contactRoutes);

// ✅ Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public_folder', 'login.html'));
});

// ✅ Logged user info
app.get('/auth/me', (req, res) => {
  if (!req.session || !req.session.user) {
      return res.status(401).json({ message: 'Not logged in' });
  }
  res.json({
      studentId: req.session.user.studentId,
      studentName: req.session.user.studentName
  });
});

// ✅ Logout
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout failed");
    res.redirect('/login.html');
  });
});

// ⚠️ Important for Vercel:
module.exports = app; // ✅ export instead of listen()
