const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const cors = require("cors");  // Make sure to include the CORS package
const db = require("./config/dbConfig");
const userRoute = require("./routes/userRoutes");
const examRoute = require("./routes/examRoutes");
const reportRoute = require("./routes/reportRoutes");

const port = process.env.PORT || 5000;

// Enable CORS middleware
app.use(cors({
  origin: 'https://online-assessment-portal.netlify.app', // Allow frontend running on this URL
  credentials: true, // Allow credentials like cookies or authorization headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);
app.use("/api/exams", examRoute);
app.use("/api/reports", reportRoute);

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "/frontend/build/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
