const mongoose = require("mongoose");
// const User = require("../models/userModel.js");
// const Webinar = require("../models/webinarModel.js");
const db = require("../models");
const { Webinar } = require("../models");

mongoose.connect("mongodb://localhost/projectdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});



const UserSeed = [
  {
    username: 'bill',
    password: "pasword",
    role: "Virtuoso"
  }

];

const WebinarSeed = [{
  title: "test",
  skillLevel: "Beginner"
}

];

// db.User.deleteMany({})
//   .then(() => db.User.insertMany(UserSeed))
//   .then(data => {
//     console.log(data.length + " records inserted!");
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// db.Webinar.deleteMany({})
//   .then(() => db.Webinar.insertMany(WebinarSeed))
//   .then(data => {
//     console.log(data.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// const seeds = [{name: db.Webinar, seedName: WebinarSeed, typeof:"Webinar"},{name: db.User, seedName: UserSeed, typeof: "User"}];
// for (seed of seeds) {
//   seed.name.deleteMany({})
//       .then(() => seed.name.insertMany(seed.seedName))
//       .then(data => {
//           console.log(`${data.length} ${seed.typeof} records inserted!`);
//       })
//       .catch(err => {
//           console.error(err);
//           process.exit(1);
//       });
// };

