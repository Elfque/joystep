const express = require("express");
require("dotenv").config();
const connect = require("./mongoose/config");

const app = express();
const cors = require("cors");
connect();

app.use(cors());

app.use(express.json({ extended: false }));

app.use("/api/session", require("./routes/session"));
app.use("/api/students", require("./routes/students"));
app.use("/api/result", require("./routes/result"));

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
