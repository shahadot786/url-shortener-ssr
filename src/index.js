import express from "express";
import router from "./routes/url.route.js";
import connectDB from "./config/dbConnection.js";

const app = express();
const PORT = 8000;
const DBUrl = "mongodb://127.0.0.1:27017/short-url";

app.use(express.json());

//connect db
connectDB(DBUrl)
  .then(() => console.log("Database connected successfully."))
  .catch(() => console.log("DB Connection error."));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
