const graphqlHTTP = require("express-graphql");
const auth = require("../middleware/auth");

module.exports = (app) =>
  app.use(
    "/Auth",
    // auth,
    graphqlHTTP({
      schema: require("../graphQL/AuthSchema.js"),
      graphiql: true,
    })
  );
