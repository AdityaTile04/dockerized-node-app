import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from dockrized node app" });
});

app.listen(PORT, () => {
  console.log(`Server runnign on port ${PORT}`);
});
