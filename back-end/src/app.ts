import express from "express";
import mongoose from "mongoose";
import bodyParse from "body-parser";
import swaggerUi from "swagger-ui-express";

import usersRoutes from "./routes/users";
import subjectsRoutes from "./routes/subjects";
import authRoutes from "./routes/auth";
import coursesRoutes from "./routes/courses";

import * as swaggerDocument from "./swagger.json";

const PORT = 3000 || process.env.PORT;
const MONGO_CLUSTER_URL =
  "mongodb+srv://admin_class-managing:QHcojgdSyqrOCb7y@stevejobs-csiyz.mongodb.net/class-managing?retryWrites=true&w=majority";
//"mongodb://localhost:27017/class-managing";

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

app.use("/courses", coursesRoutes);
app.use("/users", usersRoutes);
app.use("/subjects", subjectsRoutes);
app.use("/auth", authRoutes);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
