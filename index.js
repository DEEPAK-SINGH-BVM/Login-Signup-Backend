// import express from "express";
// import router from "./routes/userRoutes.js";
// import db from "./config/db.js";
// import cors from 'cors'
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors())


// app.use("/", router);

// const PORT = process.env.PORT || 7070;

// app.listen(PORT, () => {
//   console.log("Server Start Successfully 7070!!");
//   db();
// });
import express from "express";
import router from "./routes/userRoutes.js";
import db from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", router);

// Default root route
app.get("/", (req, res) => res.send("Backend is running!"));

// Port
const PORT = process.env.PORT || 7070;

// Start server and connect DB
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  db(); // connect to MongoDB
});
