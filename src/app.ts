import express from "express";
import mongoose from "mongoose";

import teachersRouter from "./routes/teachers";
import studentsRouter from "./routes/students";
import subjectsRouter from "./routes/subjects";
import bodyParse from "body-parser";

const PORT = 3000;
const MONGO_CLUSTER_URL =
  "mongodb+srv://admin_class-managing:QHcojgdSyqrOCb7y@stevejobs-csiyz.mongodb.net/class-managing?retryWrites=true&w=majority";

const app = express();

app.use(bodyParse.json());

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

app.listen(PORT, async () => {
  console.log(`🚀 Server ready at http://localhost:${PORT} 🚀`);
  try {
    await mongoose.connect(MONGO_CLUSTER_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Database: connected successfully!");
  } catch (err) {
    console.log(`Database: connection failed ${err}`);
  }
});
