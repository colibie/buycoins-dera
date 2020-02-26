const express = require('express');
const graphqlHTTP = require('express-graphql');
const {root} = require('./resolver');
const {schema} = require('./schema');

const app = express();
const port = process.env.PORT || 4000;

app.use('/', (req, res) => {
    res.json({
        status: 200,
        message: `Hiiii, please navigate to /graphql for the interface. The format of the graphql query is { calculatePrice(type: "buy", margin: 0.2, exchangeRate: 360.0) }`
    })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => console.log('Now browse to localhost:4000/graphql'));