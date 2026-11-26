import express from "express";
import cors from "cors";
import "dotenv/config";
import exercisesRouter from "./routes/exercises.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/exercises", exercisesRouter);

app.listen(process.env.PORT, () => {
  console.log(`API sur http://localhost:${process.env.PORT}`);
});
