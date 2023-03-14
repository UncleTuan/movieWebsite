const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON request body

// Example user data (replace with your own database)
const users = [
  {
    email: "minhtuan241001@gmail.com",
    password: "123",
  },
];

// Handle login POST request
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if user exists and password is correct
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    // Return success response
    res.status(200).json({ message: "Login successful" });
  } else {
    // Return error response
    res.status(401).json({ message: "Invalid email or password" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
