const express = require('express');
const graphqlHTTP = require('express-graphql');
const {root} = require('./resolver');
const {schema} = require('./schema');

const app = express();
const port = process.env.PORT || 4000;

app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use('/', (req, res) => {
    res.json({
        status: 200,
        message: `Hiiii, please navigate to /graphiql for the interface. The format of the graphql query is { calculatePrice(type: "buy", margin: 0.2, exchangeRate: 360.0) }`
    })
})

app.listen(port, () => console.log('Now browse to localhost:4000/graphiql'));