const Factory = use('Factory');

class ProductAttributeSeeder {
  async run() {
    const { id: user_id } = await Factory.model('App/Models/User').create();
    const { id: type_id } = await Factory.model('App/Models/Type').create();
    const { id: product_id } = await Factory.model('App/Models/Product').create({ user_id, type_id });
    const { id: attribute_id } = await Factory.model('App/Models/Attribute').create({ type_id });
    await Factory.get('product_attributes').create({ product_id, attribute_id });
  }
}

module.exports = ProductAttributeSeeder;
