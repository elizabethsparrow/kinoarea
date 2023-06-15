import express from "express";
import moviesRouter from "./routes/movies.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("123");
});

app.use("/api", moviesRouter);

app.use((req, res) => {
  res.send("Error 404!");
});

app.listen(PORT, () => {
  console.log(`Server ran on http://localhost:${PORT}`);
});
