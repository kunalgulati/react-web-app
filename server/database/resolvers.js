const bcrypt = require('bcryptjs')
// const Users = require('./dbConnectors').Users;

// heigher the number, higher will be the time to calculate the hash 
var saltRounds = 10;

// const resolvers = {
//   Query: {
//     hello: () => {
//       return 'Hello wsssorld!'
//     },
//     getUsers: () => {
//       return Users.findAll();
//     },
//   },
//   Mutation: {
//     createUser: (input) => {
//       const newUser = new Users({
//         id: 001,
//         name: "input.name",
//         email: input.email,
//         password: input.password,
//         createdAt: Date.now(),
//       });
//       // await bcrypt.hash(newUser.password, saltRounds, function(err, hashPassword) {
//       //   if(err) reject(err);
//       //   newUser.password = hashPassword;
//       //   console.log(newUser.password)
//       // });

//       var salt = bcrypt.genSaltSync(saltRounds);
//       var hashPassword = bcrypt.hashSync(newUser.password, salt);

//       if(hashPassword){
//         newUser.password = hashPassword;
//       }
//       newUser.id = newUser._id;

//       return new Promise((resolve, object) => {
//         console.log("before")
//         newUser.save((err) => {
//           if (err) reject(err)
//           else resolve(true)
//         })
//       })
//     },
//     updateUser: (root, { input }) => {
//       return new Promise((resolve, object) => {
//         Users.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
//           if (err) reject(err)
//           else resolve(friend)
//         })
//       })
//     },
//   }
// };


const { paginateResults } = require('../utils');

module.exports = {
  Query: {
    launches: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allLaunches = await dataSources.launchAPI.getAllLaunches();
      // we want these in reverse chronological order
      allLaunches.reverse();

      const launches = paginateResults({
        after,
        pageSize,
        results: allLaunches,
      });

      return {
        launches,
        cursor: launches.length ? launches[launches.length - 1].cursor : null,
        // if the cursor of the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: launches.length
          ? launches[launches.length - 1].cursor !==
            allLaunches[allLaunches.length - 1].cursor
          : false,
      };
    },
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
    me: async (_, __, { dataSources }) =>
      dataSources.userAPI.findOrCreateUser(),
  },
  Mutation: {
    bookTrips: async (_, { launchIds }, { dataSources }) => {
      const results = await dataSources.userAPI.bookTrips({ launchIds });
      const launches = await dataSources.launchAPI.getLaunchesByIds({
        launchIds,
      });

      return {
        success: results && results.length === launchIds.length,
        message:
          results.length === launchIds.length
            ? 'trips booked successfully'
            : `the following launches couldn't be booked: ${launchIds.filter(
                id => !results.includes(id),
              )}`,
        launches,
      };
    },
    cancelTrip: async (_, { launchId }, { dataSources }) => {
      const result = dataSources.userAPI.cancelTrip({ launchId });

      if (!result)
        return {
          success: false,
          message: 'failed to cancel trip',
        };

      const launch = await dataSources.launchAPI.getLaunchById({ launchId });
      return {
        success: true,
        message: 'trip cancelled',
        launches: [launch],
      };
    },
    login: async (_, { email }, { dataSources }) => {
      const user = await dataSources.userAPI.findOrCreateUser({ email });
      if (user) return new Buffer(email).toString('base64');
    },
    uploadProfileImage: async(_, { file }, { dataSources }) =>
      dataSources.userAPI.uploadProfileImage({ file }),
  },
  Launch: {
    isBooked: async (launch, _, { dataSources }) =>
      dataSources.userAPI.isBookedOnLaunch({ launchId: launch.id }),
  },
  Mission: {
    // make sure the default size is 'large' in case user doesn't specify
    missionPatch: (mission, { size } = { size: 'LARGE' }) => {
      return size === 'SMALL'
        ? mission.missionPatchSmall
        : mission.missionPatchLarge;
    },
  },
  User: {
    trips: async (_, __, { dataSources }) => {
      // get ids of launches by user
      const launchIds = await dataSources.userAPI.getLaunchIdsByUser();

      if (!launchIds.length) return [];

      // look up those launches by their ids
      return (
        dataSources.launchAPI.getLaunchesByIds({
          launchIds,
        }) || []
      );
    },
  },
};

// module.exports = resolvers;

