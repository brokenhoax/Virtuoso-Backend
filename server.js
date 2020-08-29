const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes");
const PORT = 3000 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

mongoose.connect("mongodb://localhost/project", {userNewUrlParser: true});

routes.route(app);

app.listen(PORT, () => {console.log(`App is listening on Port: ${PORT}`)});