const graphqlHTTP = require("express-graphql");
const auth = require("../middleware/auth");

module.exports = (app) =>
  app.use(
    "/graphqlAuth",
    auth,
    graphqlHTTP({
      schema: require("../graphQL/schema.js"),
      graphiql: true,
    })
  );
