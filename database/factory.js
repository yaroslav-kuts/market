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
  name: data.name || faker.word()
}));

Factory.blueprint('App/Models/Product', (faker, index, data) => ({
  name: data.name || faker.word(),
  price: data.price || faker.integer({ min: 1, max: 20000 }),
  type_id: data.type_id,
  user_id: data.user_id
}));

Factory.blueprint('App/Models/Attribute', (faker, index, data) => ({
  name: data.name || faker.word(),
  type_id: data.type_id
}));

Factory.blueprint('product_attributes', (faker, index, data) => ({
  product_id: data.product_id,
  attribute_id: data.attribute_id,
  value: data.value || faker.word()
}));
