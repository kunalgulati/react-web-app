const bcrypt = require('bcryptjs')
const Users = require('../models/UserModel').Users;
const Products = require('../models/ProductModel').Products;
const OrderCartItems = require('../models/OrderCartModel').OrderCartItems;
const mongoose = require('mongoose')

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
      var user = Users.find({ email: args.email });
      if (!user) { return null; }
      else { return user }
    },
    getAllProducts: () => {
      return Products.find();
    },
    getProduct: (parent, args, context, info) => {
      // return new Promise((resolve, reject) => {
      //   // Products.findById(mongoose.Types.ObjectId(args.productId), 
      //   Products.find({_id: mongoose.Types.ObjectId(args.productId) },
      //     async (err, data) =>{
      //       console.log(data);
      //       if(err) reject(err);
      //       else resolve([].push(data));
      //     }
      //   )}
      // );
      return Products.find({_id: mongoose.Types.ObjectId(args.productId) })
    },
    // Cart
    getOrderCartItems: (parent, args, context, info) => {
      var orderCartItem = OrderCartItems.find({ user_id: mongoose.Types.ObjectId(args.userId) });
      if (!orderCartItem) { return null; }
      else { return orderCartItem }      
    },
    getOrderSummaryProduct: (parent, args, context, info) => {
      var orderCartItem = OrderCartItems.find({ user_id: mongoose.Types.ObjectId(args.userId) }, (err, orderCartItem)=>{
        if (!orderCartItem) { return null; }
        // else { return orderCartItem }
        console.log(orderCartItem)
        var productIds = [];
        for(var i=0; i<orderCartItem.length; i++ ){
          productIds.push(orderCartItem[i].product_id);
        }
        return new Promise((resolve, reject) => {
          Products.where('_id').in(productIds).exec((err, data) => {
            if (err) reject(err)
            else resolve(data)
          })
        })
      }
      );
    }
  },
  Mutation: {
    /** **************************************** User **************************************** */
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

      return new Promise((resolve, reject) => {
        newUser.save((err) => {
          if (err) reject(err)
          else resolve(newUser)
        })
      })
    },
    updateUser: (root, { input }) => {
      //WRONG
      //TODO
      return new Promise((resolve, object) => {
        Users.findOneAndUpdate({ _id: input.id }, input, { new: true }, 
          (err, friend) => {
          if (err) reject(err)
          else resolve(friend)
        })
      })
    },
    /** ************************************** Product **************************************** */
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

      return new Promise((resolve, reject) => {
        newProduct.save((err) => {
          if (err) reject(err)
          else resolve(newProduct)
        })
      })
    },    
    /** ************************************* Order Cart **************************************** */
    addProductCart: (parent, args, context, info) => {
      const filter = {
        $and: [
          { user_id: mongoose.Types.ObjectId(args.userId) },
          { product_id: mongoose.Types.ObjectId(args.productId) }
        ]
      };

      var result = {};
      return new Promise((resolve, reject) => {
        OrderCartItems.find(filter, function (err, data) {
          if (err) { return err }
          else if (data.length == 1) {
            /** If data.length == 1 means the product already exisits in the Cart;
             * So we need to update it's quantity */ 
            result = data[0];
            var newQuantity = result.quantity + args.quantity;
            OrderCartItems.updateOne(filter, { quantity: newQuantity },
                (err) => {
                  console.log(err)
                  if (err) reject(err)
                  else resolve(true)
            })
          } else {
            /** The product doesn't already exisits in the cart;
             * So we need to update it's quantity */             
            const cartItem = new OrderCartItems({
              user_id: args.userId,
              product_id: args.productId,
              quantity: args.quantity,
            });
            cartItem.id = cartItem._id;
            cartItem.save((err) => {
              if (err) reject(err)
              else resolve(true)
            })
          }
        });
      })
    },
  }
};

module.exports = resolvers;

