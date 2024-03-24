require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
const topicRouter = require("./router/topic-router");
const questionRouter = require("./router/question-router");
app.use("/api/topic", topicRouter);
app.use("/api/question", questionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
