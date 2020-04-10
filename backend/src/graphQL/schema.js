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

const { ProjectType, UserType, PairType, ImgPathType } = require("./types");
const User = require("../models/user");
const Project = require("../models/project");

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
