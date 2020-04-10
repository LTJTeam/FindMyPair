const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

require("./controller/authController")(app);

app.use(
  "/graphqlPost",
  graphqlHTTP({
    schema: require("./graphQL/schema.js"),
    graphiql: true,
  })
);

module.exports = app;
