// My attempt on testing, using Jest

const {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    mockServer
  } = require('graphql-tools');

const { graphql } = require('graphql')
  
const testCaseA = {
    id: 'Test case A',
    query: `
      query {
        calculatePrice(type: "buy", margin: 0.2, exchangeRate: 360.0)
      }
    `,
    expected: { data: {
        "calculatePrice": `NGN${3246.4800}`
      } }
  };
  
describe('Schema', () => {
    const schemaStrings = `
    type Query {
      calculatePrice(type: String!, margin: Float!, exchangeRate: Float!): String
    }
  `
    
    const mockSchema = makeExecutableSchema({ typeDefs: schemaStrings });
  
    // Here we specify the return payloads of mocked types
    addMockFunctionsToSchema({
      schema: mockSchema,
      mocks: {
        String: () => `NGN${3246.4800}`,
      }
    });
  
    test('has valid type definitions', async () => {
      expect(async () => {
        const MockServer = mockServer(typeDefs);
  
        await MockServer.query(`{ __schema { types { name } } }`);
      }).not.toThrow();
    });
  
  const { id, query, expected } = testCaseA;

  test(`query: ${id}`, async () => {
    return await expect(
        graphql(mockSchema, query)
    ).resolves.toEqual(expected);
    });
});
  
  