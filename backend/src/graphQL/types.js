const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

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

module.exports = { ProjectType, UserType, PairType, ImgPathType };
