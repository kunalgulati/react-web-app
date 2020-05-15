const bcrypt = require('bcryptjs')
const Users = require('./dbConnectors').Users;

// heigher the number, higher will be the time to calculate the hash 
var saltRounds = 10;

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello wsssorld!'
    },
    getUsers: () => {
      return Users.findAll();
    },
  },
  Mutation: {
    createUser: (input) => {
      const newUser = new Users({
        id: 001,
        name: "input.name",
        email: input.email,
        password: input.password,
        createdAt: Date.now(),
      });
      // await bcrypt.hash(newUser.password, saltRounds, function(err, hashPassword) {
      //   if(err) reject(err);
      //   newUser.password = hashPassword;
      //   console.log(newUser.password)
      // });

      var salt = bcrypt.genSaltSync(saltRounds);
      var hashPassword = bcrypt.hashSync(newUser.password, salt);

      if(hashPassword){
        newUser.password = hashPassword;
      }
      newUser.id = newUser._id;

      return new Promise((resolve, object) => {
        console.log("before")
        newUser.save((err) => {
          if (err) reject(err)
          else resolve(true)
        })
      })
    },
    updateUser: (root, { input }) => {
      return new Promise((resolve, object) => {
        Users.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
          if (err) reject(err)
          else resolve(friend)
        })
      })
    },
  }
};

module.exports = resolvers;

