const mongoose = require("mongoose");
// const User = require("../models/userModel.js");
// const Webinar = require("../models/webinarModel.js");
const db = require("../models");

mongoose.connect("mongodb://localhost/projectdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});



const UserSeed = [
  {
    username: 'bill',
    password: "pasword",
    role: "Virtuoso"
  },
  {
    username: 'bing',
    password: "pasword",
    role: "Virtuoso"
  }

];

const WebinarSeed = [
  {
    title: "test",
    skillLevel: "Beginner"
  },
  {
    title: "test",
    skillLevel: "Beginner"
  }

];


db.User.deleteMany({})
  .then(() => { return db.Webinar.deleteMany({}) }
  )
  .then(() => {
    return db.User.insertMany(UserSeed);
  }
  )
  .then(() => {
    return db.Webinar.insertMany(WebinarSeed);
  })
  .then(
    data => {
      console.log(`${data.length} records inserted!`);
      process.exit(0);
    })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
