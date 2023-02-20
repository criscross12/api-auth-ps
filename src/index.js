const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const responseTime = require("response-time");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");

const app = express();

const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.use(responseTime());
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("api-auth");
});

async function main() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error(err);
    });
  app.listen(port, () => {
    console.log("Server on", port);
  });
}

main();
