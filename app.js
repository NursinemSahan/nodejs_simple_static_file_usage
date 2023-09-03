const express  = require("express");
const path = require("path");
const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");

const app = express();



app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/users", userRouter);

app.listen(3000);