import express from "express";

import teachersRouter from "./routes/teachers";
import studentsRouter from "./routes/students";
import subjectsRouter from "./routes/subjects";

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);
app.use("/subjects", subjectsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
