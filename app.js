const express = require('express');
const graphqlHTTP = require('express-graphql');
const {root} = require('./resolver');
const {schema} = require('./schema');

const app = express();
const port = process.env.PORT || 4000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => console.log('Now browse to localhost:4000/graphql'));