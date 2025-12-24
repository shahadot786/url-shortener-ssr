import express from "express";
import path from "path";
import router from "./routes/url.route.js";
import connectDB from "./config/dbConnection.js";
import staticRoute from "./routes/staticRouter.js";

const app = express();
const PORT = 8000;
const DBUrl = "mongodb://127.0.0.1:27017/short-url";

//connect db
connectDB(DBUrl)
  .then(() => console.log("Database connected successfully."))
  .catch(() => console.log("DB Connection error."));

app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
