const graphqlHTTP = require("express-graphql");

module.exports = (app) =>
  app.use(
    "/noAuth",
    graphqlHTTP({
      schema: require("../graphQL/noAuthSchema"),
      graphiql: true,
    })
  );
