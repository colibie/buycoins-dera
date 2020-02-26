const axios = require('axios')

const root = {
    calculatePrice: async ({type, margin, exchangeRate}) => {
        try {
            let result;

            const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
            const currentPrice = parseFloat(res.data.bpi.USD.rate);

            const marginPercent = (margin/100) * currentPrice;

            type = type.toUpperCase();
            switch(type) {
                case 'BUY': {
                    result = currentPrice + marginPercent; //computed value with margin
                    break;
                }
                case 'SELL': {
                    result = currentPrice - marginPercent;
                    break;
                }
                default: {
                    throw new Error('type must be either BUY or SELL')
                }
            }

            const calculatedPrice = result * exchangeRate
            return `NGN${calculatedPrice.toFixed(4)}`;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
    root
}