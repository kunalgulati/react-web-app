const bcrypt = require('bcryptjs')
const Users = require('../models/UserModel').Users;
// const Products = require('./dbConnectors').Products;

// heigher the number, higher will be the time to calculate the hash 
var saltRounds = 10;

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello wsssorld!'
    },
    getUsers: () => {
      return Users.find();
    },
    getUser: (parent, args, context, info) => {
      console.log(args.email)
      return Users.findOne({
        where: {
           email: args.email
        }
      }).then(function(user) {
        if(!user){
          return null;
        }
        console.log(user)
        return user;
      });
      
 
    },
    getAllProducts: () => {
      return Products.findAll();
    },
  },
  Mutation: {
    createUser: (parent, args, context, info) => {    
      const newUser = new Users({
        email: args.email,
        password: args.password,
        firstName: args.firstName,
        lastName: args.lastName,
        companyName: args.companyName, 
        phoneNumber: args.phoneNumber
      });

      newUser.id = newUser._id;

      return new Promise((resolve, reject)=>{
        newUser.save((err) => {
          if (err) reject(err)
          else resolve(newUser)
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

