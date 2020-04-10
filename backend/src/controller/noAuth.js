const graphqlHTTP = require("express-graphql");

module.exports = (app) =>
  app.use(
    "/graphqlPost",
    graphqlHTTP({
      schema: require("../graphQL/noAuthSchema"),
      graphiql: true,
    })
  );
