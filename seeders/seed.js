const mongoose = require("mongoose");
// const User = require("../models/userModel.js");
// const Webinar = require("../models/webinarModel.js");
const db = require("../models");

mongoose.connect("mongodb://localhost/projectdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const users = ["Bill", "Phillip", "Edward", "Pablo", "Gil", "Francesca", "Edith", "Sasha"];
let UserSeed = [];
UserSeed = users.map(user => ({
  username: user,
  password: "password",
  role: "Virtuoso"
})
);

const webinars = ["Data and you!", "Best Financing Practices", "Putting the We in Web dev!", "How to get a raise in 10 days!", "What to do when you become the boss", "Uh Oh, my database has been wiped!"]
let WebinarSeed = [];
WebinarSeed = webinars.map(webinar => ({
  title: webinar,
  description: "This is a really awesome Webinar!!!",
  date: new Date,
  hosts: "Bill and Ted",
  duration: "06:30",
  mainTopic: "Webinar",
  skillLevel: "Beginner",
  tags: {
    educational: true,
    networking: true,
    finance: true,
    marketing: false,
    engineering: false
  }
})
);


db.User.deleteMany({})
  .then(() => {
    return db.Webinar.deleteMany({})
  })
  .then(() => {
    return db.User.insertMany(UserSeed);
  })
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
