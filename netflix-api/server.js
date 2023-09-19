const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const { DB_HOST, PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.use("/api/user", userRoutes);
