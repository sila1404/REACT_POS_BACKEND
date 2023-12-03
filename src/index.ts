import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { connectDb } from "./configs/database";
import { errorHandler } from "./middlewares/errorMiddleware";
import cors from "cors";

//Routes
import productRoute from "./routes/productRoute";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import saleRoute from "./routes/saleRoute";
import dashboardRoute from "./routes/dashboardRoute";
import reportRoute from "./routes/reportRoute";

const app = express();
app.use(express.json(), bodyParser.urlencoded({ extended: false }), cors());

app.get("/", (req, res) => {
  res.send("hello wolrd");
});

app.use("/products", productRoute);
app.use("/users", userRoute);
app.use('/', authRoute)
app.use('/', saleRoute)
app.use('/', dashboardRoute)
app.use('/', reportRoute)

app.use(errorHandler);

connectDb().then(() => {
  try {
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server running at port 3000");
});
