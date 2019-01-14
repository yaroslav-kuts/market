const Factory = use('Factory');
const User = use('App/Models/User');
const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');

class ProductSeeder {
  async run() {
    const { rows: users } = await User.all();
    const { rows: types } = await Type.all();
    for (const { id: user_id } of users) {
      for (const { id: type_id } of types) {
        const { id: product_id } = await Factory.model('App/Models/Product').create({ user_id, type_id });
        const { rows: attributes } = await Attribute.query()
          .where('type_id', '=', type_id)
          .fetch();
        for (const { id: attribute_id } of attributes) {
          await Factory.get('product_attributes').create({ product_id, attribute_id });
        }
      }
    }
  }
}

module.exports = ProductSeeder;
