const Factory = use('Factory');
const User = use('App/Models/User');
const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');

class ProductSeeder {
  async run() {
    const productTasks = [];
    const { rows: users } = await User.all();
    const { rows: types } = await Type.all();
    for (const { id: user_id } of users) {
      for (const { id: type_id } of types) {
        productTasks.push(Factory.model('App/Models/Product').create({ user_id, type_id }));
      }
    }
    const products = await Promise.all(productTasks);

    const attributeTasks = [];
    for (const { type_id } of products) {
      attributeTasks.push(
        Attribute.query()
          .where('type_id', '=', type_id)
          .fetch()
      );
    }
    const attributes = await Promise.all(attributeTasks);

    const productAttributes = attributes.reduce(
      (acc, attrs, index) =>
        acc.concat(attrs.rows.map(row => ({ product_id: products[index].id, attribute_id: row.id }))),
      []
    );
    await Promise.all(
      productAttributes.map(({ product_id, attribute_id }) =>
        Factory.get('product_attributes').create({ product_id, attribute_id })
      )
    );
  }
}

module.exports = ProductSeeder;
