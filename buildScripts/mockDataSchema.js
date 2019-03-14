var schema = {
  type: 'object',
  properties: {
    locations: {
      type: 'array',
      minItems: 8,
      maxItems: 10,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            unique: true,
            minimum: 1
          },
          name: {
            type: 'string',
            faker: 'company.companyName'
          },
          address: {
            type: 'string',
            faker: 'address.streetName'
          },
          email: {
            type: 'string',
            faker: 'internet.email'
          }
        },
        required: ['id', 'type', 'name', 'email']
      }
    }
  },
  required: ['locations']
};

module.exports = schema;
