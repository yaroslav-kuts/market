const Factory = use('Factory');

class ProductSeeder {
  async run() {
    const { id: user_id } = await Factory.model('App/Models/User').create();
    const { id: type_id } = await Factory.model('App/Models/Type').create();
    await Factory.model('App/Models/Product').create({ user_id, type_id });
  }
}

module.exports = ProductSeeder;
