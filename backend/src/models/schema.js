const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const User = require("./user");
const Project = require("./project");

const PairType = new GraphQLObjectType({
  name: "Pair",
  fields: {
    id: { type: GraphQLString },
    isAproved: { type: GraphQLBoolean },
  },
});
const ImgPathType = new GraphQLObjectType({
  name: "imgPath",
  fields: {
    fileName: { type: GraphQLString },
    filePath: { type: GraphQLString },
  },
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    whatsapp: { type: GraphQLString },
    skills: { type: GraphQLList(GraphQLString) },
  },
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    quickDescription: { type: GraphQLString },
    fullDescription: { type: GraphQLString },
    link: { type: GraphQLInt },
    creator: { type: GraphQLString },
    pair: { type: GraphQLList(PairType) },
    imgPath: { type: GraphQLList(ImgPathType) },
    needPairs: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        password: {
          type: new GraphQLNonNull(GraphQLString),
        },
        whatsapp: {
          type: new GraphQLNonNull(GraphQLString),
        },
        skills: {
          type: new GraphQLNonNull(GraphQLList(GraphQLString)),
        },
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
          whatsapp: args.whatsapp,
          skills: args.skills,
        });
        return user.save();
      },
    },
    addProject: {
      type: ProjectType,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString),
        },
        quickDescription: {
          type: new GraphQLNonNull(GraphQLString),
        },
        fullDescription: {
          type: new GraphQLNonNull(GraphQLString),
        },
        link: {
          type: new GraphQLNonNull(GraphQLString),
        },
        creator: {
          type: new GraphQLNonNull(GraphQLString),
        },
        needPairs: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        // pair: {
        //   type: new GraphQLList(PairType),
        // },
        // imgPath: {
        //   type: new GraphQLList(ImgPathType),
        // },
      },
      resolve(parent, args) {
        let project = new Project({
          title: args.title,
          quickDescription: args.quickDescription,
          fullDescription: args.fullDescription,
          link: args.link,
          creator: args.creator,
          needPairs: args.needPairs,
          // pair: args.pair,
          // imgPath: args.imgPath,
        });
        return project.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "Query",
//     fields: {
//       user: {
//         type: GraphQLList(UserType),
//         resolve: (root, args, context, info) => {
//           return UserModel.find().exec();
//         },
//       },
//     },
//   }),
//   mutation: new GraphQLObjectType({
//     name: "CreateUser",
//     fields: {
//       user: {
//         type: UserType,
//         args: {
//           name: { type: GraphQLNonNull(GraphQLString) },
//           email: { type: GraphQLNonNull(GraphQLString) },
//           password: { type: GraphQLNonNull(GraphQLString) },
//           whatsapp: { type: GraphQLNonNull(GraphQLInt) },
//           skills: { type: [] },
//         },
//         resolve: (root, args, context, info) => {
//           var user = new UserModel(args);
//           return user.save();
//         },
//       },
//     },
//   }),
// });
