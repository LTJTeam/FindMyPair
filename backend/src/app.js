const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: require("./models/schema.js"),
    graphiql: true,
  })
);
module.exports = app;
