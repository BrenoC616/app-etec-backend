const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config();

const app = express();
require("./config/dbConfig");

const PORT = process.env.PORT | 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
