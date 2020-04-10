const graphQL = require("graphql");
const express = require("express");
const expressGraphQL = require("express-graphql");
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLSchema,
  GraphQLNonNull,
} = require("graphql");

const routes = express.Router();
routes.post("/graphql", () => {
  return "goHorse";
});
module.exports = (app) => app.use("/user", routes);
