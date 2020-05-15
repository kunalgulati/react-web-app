const bcrypt = require('bcryptjs')
const Users = require('./dbConnectors').Users;

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello wsssorld!'
    },
    getUsers: ()  =>{
      return Users.findAll();
    },
  },
  Mutation: {
    createUser: (root, { input }) => {
      console.log("yeyy");
      const newUser = new Users({
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password,
        createdAt: Date.now(),
      });
  
      newUser.id = newUser._id;
      
      return new Promise((resolve, object) => {
        newUser.save((err) => {
          if (err) reject(err)
          else resolve(newUser)
        })
      })
    },
  }
};

module.exports = resolvers;

