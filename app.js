const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 6121;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/cat", require("./routes/catRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
