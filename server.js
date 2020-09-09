require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes/routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect("mongodb://localhost/projectdb", {useNewUrlParser: true});

app.listen(PORT, () => {console.log(`App is listening on Port: ${PORT}`)});