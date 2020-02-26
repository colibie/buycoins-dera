# buycoins-dera
A test repo for buycoins

View [here](https://buycoins-dera.herokuapp.com/graphiql)

## creating a query
The query format should be
```
{
    calculatePrice(type: "buy", margin: 0.2, exchangeRate: 360.0)
}
where type is either BUY or SELL
margin is in percentage
and exchangeRate is, well, the exchange rate you want from USD/NGN
```
