const bcrypt = require('bcryptjs')
const Users = require('../models/UserModel').Users;
const Products = require('../models/ProductModel').Products;

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
      var user = Users.find({ email: args.email});
      if(!user) { return null;}
      else {return user}
    },
    getAllProducts: () => {
      return Products.find();
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
    createProduct: (parent, args, context, info) => {    
      const newProduct = new Products({
        title: args.title,
        description: args.description,
        certification: args.certification,
        city_of_origin: args.city_of_origin,
        province_of_origin: args.province_of_origin,
        country_of_origin: args.country_of_origin,
        grade: args.grade,
        size: args.size,
        gmo: args.gmo,
        washed: args.washed,
        store_temperature_range: args.store_temperature_range,
        store_humidity: args.store_humidity,
        chill_damage_sensitive: args.chill_damage_sensitive,
        pack_weight: args.pack_weight,
        price: args.price,
        minimum_quantity: args.minimum_quantity,
        available: args.available
      });

      newProduct.id = newProduct._id;

      return new Promise((resolve, reject)=>{
        newProduct.save((err) => {
          if (err) reject(err)
          else resolve(newProduct)
        })
      })
    },
    updateUser: (root, { input }) => {
      //WRONG
      //TODO
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

