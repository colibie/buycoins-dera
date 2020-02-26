const { root } = require('../resolver');

const { calculatePrice } = root;

test('calculatePrice should return result', async () => {
  const data = await calculatePrice({type: 'SELL', margin: 0.3,exchangeRate: 364});
  expect(data).not.toBeNull();
});

test('calculatePrice should throw error', async () => {
  await expect(calculatePrice({type: 'horde', margin: 0.3, exchangeRate: 364})).rejects.toThrow(Error);
});