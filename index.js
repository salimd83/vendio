const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`
);

// Middleware
app.use(express.json());

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connect();

// Sample route to check server status
app.get("/", (req, res) => {
  res.send("POS System API is running");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
