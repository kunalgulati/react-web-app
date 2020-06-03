const bcrypt = require('bcryptjs')
const Users = require('./dbConnectors').Users;
const Products = require('./dbConnectors').Products;

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
      var newUser = args;
      
      // Encrypt the password
      var salt = bcrypt.genSaltSync(saltRounds);
      var hashPassword = bcrypt.hashSync(newUser.password, salt);      
      if(hashPassword){
        newUser.password = hashPassword;        
      }
      // Check if the given email already exists; If not, create a new user
      Users
        .findOrCreate({where: {email: newUser.email}, defaults: {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          phoneNumber: newUser.phoneNumber,
          companyName: newUser.companyName,
          password: newUser.password,
          createdAt: Date.now(),
        }})
        .spread(function(user, created) {
          if(created == false){
            console.log("User already exists");
            return ("User already exists");
          } else{
            return user;
          }
        });
      
      // // const newUser = new Users({
      // //   id: 003,
      // //   firstName: input.firstName,
      // //   lastName: input.lastName,
      // //   email: input.email,
      // //   phoneNumber: input.phoneNumber,
      // //   companyName: input.companyName,
      // //   password: input.password,
      // //   createdAt: Date.now(),
      // // });

      // // var salt = bcrypt.genSaltSync(saltRounds);
      // // var hashPassword = bcrypt.hashSync(newUser.password, salt);

      // // if(hashPassword){
      // //   newUser.password = hashPassword;
      // // }
      // // newUser.id = newUser._id;

      // return new Promise((resolve, object) => {
      //   newUser.save((err) => {
      //     if (err) reject(err)
      //     else resolve(newUser)
      //   })
      // })
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

