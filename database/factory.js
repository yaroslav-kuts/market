const Factory = use('Factory');

Factory.blueprint('App/Models/User', async (faker, index, data) => ({
  firstname: data.firstname || faker.first(),
  lastname: data.lastname || faker.last(),
  email: data.email || faker.email(),
  phone: data.phone || faker.phone(),
  role: data.role || 'user',
  address: data.address || faker.address(),
  password: data.password || faker.password()
}));

Factory.blueprint('App/Models/Type', (faker, index, data) => ({
  title: data.title || faker.word(),
  attributes: data.attributes || {
    attr1: 'value1',
    attr2: 'value2',
    attr3: 'value3'
  }
}));

Factory.blueprint('App/Models/Product', (faker, index, data) => ({
  title: data.title || faker.word(),
  price: data.price || faker.integer({ min: 1, max: 20000 }),
  properties: data.properties || {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
  },
  type_id: data.type_id || faker.integer({ min: 1, max: 1000 }),
  user_id: data.user_id || faker.integer({ min: 1, max: 1000 })
}));
